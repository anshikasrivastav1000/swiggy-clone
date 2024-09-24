import { useEffect, useState } from 'react';
import axios from 'axios';

const User = () => {
  const [userData, setUserData] = useState(null);

  const fetchUserData = async () => {
    try {
      const user = await axios.get('https://api.github.com/user/150316139');
      setUserData(user.data);
    } catch (error) {
      console.log('Failed to fetch user data');
    }
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  if (!userData) {
    return <div className="text-center text-lg font-semibold">Loading...</div>;
  }

  return (
    <div className="user-card flex justify-center items-center h-screen bg-gray-100">
      <div className="user-info bg-white p-8 rounded-lg shadow-lg text-center">
        <img
          src={userData.avatar_url}
          alt="user avatar"
          className="w-32 h-32 rounded-full mx-auto shadow-md"
        />
        <h2 className="text-2xl font-bold mt-4 text-gray-800">{userData.name}</h2>
        <a
          href={userData.html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-4 bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-md font-semibold transition-all duration-300 shadow-sm"
        >
          Visit GitHub Profile
        </a>
      </div>
    </div>
  );
};

export default User;
