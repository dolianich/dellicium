import styles from './Profile.module.css';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import { useWallet } from '@solana/wallet-adapter-react';
import { useRef } from 'react';

const Profile = () => {
  const { connected, publicKey } = useWallet();
  const hiddenButtonRef = useRef<HTMLDivElement>(null);

  const handleClick = () => {
    const walletButton = hiddenButtonRef.current?.querySelector('button');
    if (walletButton instanceof HTMLButtonElement) {
      walletButton.click();
    }
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.hiddenButton} ref={hiddenButtonRef}>
        <WalletMultiButton />
      </div>
      <button onClick={handleClick} className={styles.connectButton}>
        {connected
          ? `${publicKey?.toString().slice(0, 4)}...${publicKey
              ?.toString()
              .slice(-4)}`
          : 'Connect Wallet'}
      </button>
    </div>
  );
};

export default Profile;
