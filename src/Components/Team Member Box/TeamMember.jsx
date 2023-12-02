import "./TeamMember.css";

export default function TeamMember(params) {
  const { image, name, role, socialLinks } = params;

  return (
    <div className="team-member-box">
      <img className="team-member-image" src={image} />
      <h2 className="team-member-name">{name}</h2>
      <p className="team-member-role">{role}</p>
      <div className="team-social-links">
        {socialLinks.map((link) => (
          <a className="team-social-link" key={link.id} href={link.link}>{link.icon}</a>
        ))}
      </div>
    </div>
  );
}
