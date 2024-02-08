import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import "./styles.scss";
import { useDispatch, useSelector } from "react-redux";
import { checkWallet, connectWalletHelper, shortWallet } from "../../helper";
import { updateSignerAddress } from "../../features/signer/signerSlice";
import Cookies from "js-cookie";

Header.propTypes = {};

function Header(props) {
  const signer = useSelector((state) => state.signer.signerAddress);
  const dispatch = useDispatch();

  useEffect(() => {
    const singer = checkWallet();
    if (singer) dispatch(updateSignerAddress(Cookies.get("signer")));
  }, [dispatch]);

  const connectWallet = () => {
    connectWalletHelper();
    dispatch(updateSignerAddress(Cookies.get("signer")));
  };
  console.log(signer)

  return (
    <div className="header-container-fluid">
      <div className="header-container">
        {!checkWallet() ? (
          <button className="connect-button" onClick={connectWallet}>
            Connect Wallet
          </button>
        ) : (
          <div>{shortWallet()}</div>
        )}
      </div>
    </div>
  );
}

export default Header;
