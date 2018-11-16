import React, { useState, useEffect } from "react";
import { Input, Button } from "rebass";

const Header = ({ updateOrg }) => {
  const [value, setValue] = useState("reactjs");
  const onMount = () => {
    console.log("OK: ");
  };
  useEffect(onMount, []);

  const doSumbit = e => {
    e.preventDefault();
    updateOrg(value);
  };
  return (
    <form onSubmit={doSumbit}>
      <Input name="Hi" value={value} onChange={e => setValue(e.target.value)} />
      <Button type="submit">Submit</Button>
    </form>
  );
};

export default Header;
