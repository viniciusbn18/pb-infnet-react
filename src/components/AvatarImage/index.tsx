import { AvatarPictureContainer } from "./style";

function AvatarImage({avatarSourceLink, avatarAltTitle, avatarTitle}) {
  return <AvatarPictureContainer src={avatarSourceLink} alt={avatarAltTitle} title={avatarTitle}/>
}

export default AvatarImage;