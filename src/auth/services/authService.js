const supabase = require('../../supabaseClient');

class AuthService {
  async registerUser(email, password) {
    const { data, error } = await supabase.auth.signUp({ email, password });

    if (error) {
      throw new Error(error.message);
    }

    return data.user;
  }

  async loginUser(email, password) {
    const { data, error } = await supabase.auth.signInWithPassword({ email, password });

    if (error) {
      throw new Error(error.message);
    }

    return data.user;
  }
}

module.exports = new AuthService();
