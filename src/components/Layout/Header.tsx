import React from "react";
import productImage from "../../etc/img/product.png";
import { Fragment } from "react";

import classes from "./Header.module.scss";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props: any) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1 className={classes.title}>ReactProducts</h1>
        <HeaderCartButton />
      </header>
      <div className={classes["main-image"]}>
        <img src={productImage} alt="A table full of great product!" />
      </div>
    </Fragment>
  );
};

export default Header;
