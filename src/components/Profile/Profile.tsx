import styles from './Profile.module.css';
import { UserCircle } from '@phosphor-icons/react';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';

const Profile = () => {
  return (
    <div>
      <WalletMultiButton />
    </div>
  );
};

export default Profile;
