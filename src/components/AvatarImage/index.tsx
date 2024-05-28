import { AvatarPictureContainer } from "./style";

interface AvatarImageProps {
  avatarSourceLink: string;
  avatarAltTitle: string;
  avatarTitle: string;
}

const AvatarImage: React.FC<AvatarImageProps> = ({ avatarSourceLink, avatarAltTitle, avatarTitle }) => {
  return <AvatarPictureContainer src={avatarSourceLink} alt={avatarAltTitle} title={avatarTitle}/>
}

export default AvatarImage;
