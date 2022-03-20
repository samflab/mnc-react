export const presentItem = (state, filterProduct) => {
    return state.find(
        (wishlistItem) => wishlistItem._id === filterProduct._id
      );
}