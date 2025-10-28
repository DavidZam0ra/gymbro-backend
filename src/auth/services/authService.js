import supabase from '../../supabaseClient.js';

class AuthService {
  /**
   * Register user
   *
   * @param {*} email
   * @param {*} password
   * @return {*} 
   * @memberof AuthService
   */
  async registerUser(email, password) {
    const { data, error } = await supabase.auth.signUp({ email, password });

    if (error) {
      throw new Error(error.message);
    }

    return data;
  }

  /**
   * Login user
   *
   * @param {*} email
   * @param {*} password
   * @return {*} 
   * @memberof AuthService
   */
  async loginUser(email, password) {
    const { data, error } = await supabase.auth.signInWithPassword({ email, password });

    if (error) {
      throw new Error(error.message);
    }

    return data;
  }
}

export default new AuthService();
