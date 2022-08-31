import { useParams } from 'react-router-dom';

const data = {
  test1: {
    name: 'test1',
    description: 'test1 desc.',
  },
  test2: {
    name: 'test2',
    description: 'test2 desc.',
  },
};
const Profile = () => {
  // url 파라미터 조회  hook useParams
  const params = useParams();
  const profile = data[params.username];

  return (
    <div>
      <h1>사용자 프로필</h1>
      {profile ? (
        <div>
          <h2>{profile.name}</h2>
          <p>{profile.description}</p>
        </div>
      ) : (
        <p>존재하지 않는 프로필입니다.</p>
      )}
    </div>
  );
};

export default Profile;
