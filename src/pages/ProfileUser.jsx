import { CloseNav } from "../components/CloseNav"
import UserProfileView from "../components/UserProfileview"
import BannerWhatsapp from './../components/BannerWhatsapp';
import Footer from './../components/Footer';

const ProfileUser = () => {
  return (
    <div>
      <CloseNav/>
      <UserProfileView />
      <BannerWhatsapp />
      <Footer />
    </div>
  )
}

export default ProfileUser
