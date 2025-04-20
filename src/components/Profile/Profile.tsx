import styles from './Profile.module.css';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';

const Profile = () => {
  return (
    <div>
      <WalletMultiButton />
    </div>
  );
};

export default Profile;
