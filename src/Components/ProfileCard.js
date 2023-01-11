// ** Using JS argument destructuring > When not ALL the props are used **
function ProfileCard({ logo, title, twitterHandle, description }) {
  return (
    <div className="card">
      <div className="card-image">
        <figure className="image is-1by1">
          <img src={logo} alt="pda logo" />
        </figure>
      </div>

      <div className="card-content">
        <div className="media-content">
          <p className="title is-4">{title}</p>
          <p className="subtitle is-6">{twitterHandle}</p>
        </div>
        <div className="content">{description}</div>
      </div>

      {/* <h3>{description}</h3> */}
    </div>
  );
}

export default ProfileCard;
