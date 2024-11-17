import "./Profile.css";

const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div className="profile-container">
      <div className="profile-info">
        <img src={image} alt="User avatar" className="profile-avatar" />
        <p className="profile-name">{name}</p>
        <p className="profile-tag">@{tag}</p>
        <p className="profile-location">{location}</p>
      </div>
      <ul className="profile-stats">
        <li>
          <span className="label">Followers</span>{" "}
          <span className="quantity">{stats.followers}</span>
        </li>
        <li>
          <span className="label">Views:</span>
          <span className="quantity">{stats.views}</span>
        </li>
        <li>
          <span className="label">Likes:</span>
          <span className="quantity">{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
