import supabase from '../../supabaseClient.js';

class VerifyTokenService {
  /**
   * Verify token and return user data
   *
   * @param {*} token
   * @return {*} 
   * @memberof VerifyTokenService
   */
  async getUserData(token) {
    const { data: userData, error } = await supabase.auth.getUser(token);

    if (error){
        throw new Error(error.message);
    }

    return userData;
  }
}

export default new VerifyTokenService();