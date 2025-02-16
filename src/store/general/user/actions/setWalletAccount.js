import { action } from 'easy-peasy';

export const setWalletAccount = action((slice, payload) => {
 const { walletAccountId, linkdropUserAccountId, isLinkdropUser } = payload;

  slice.currentAccount = walletAccountId;
  slice.accounts[walletAccountId] = {
    wallet: {
      isExist: true,
      accountId: walletAccountId,
    },
    linkdrop: {
      isExist: isLinkdropUser,
      accountId: linkdropUserAccountId,
    }
  }
});
