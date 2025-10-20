import { create } from 'zustand';

// 1. Define your 'profile' interface
interface profile {
  Name: string;
  Aboutme: string;
  RepoName: string;
}

// 2. Define the interface for the *entire* store state and actions
interface ProfileStoreState {
  pro: profile;
  loading: boolean;
  error: string | null;
  fetchData: () => Promise<void>;
}

// 3. Pass the store interface to 'create'
const useProfile = create<ProfileStoreState>((set) => ({
  pro: { Name: "", Aboutme: "", RepoName: "" }, // Initial state
  loading: false,
  error: null,

  // Action to fetch users from the API
  fetchData: async () => {
    set({ loading: true, error: null }); // Set loading state to true and reset error
    try {
      const response = await fetch('profile_config.json');
      
      // 4. IMPORTANT: Tell TypeScript the type of 'data'
      const data = await response.json() as profile; 
      
      set({ pro: data, loading: false }); // Set users data and loading to false
    } catch (error) {
      set({ error: 'Failed to fetch users', loading: false }); // Set error if fetch fails
    }
  },
}));

export default useProfile;