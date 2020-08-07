import React from "react";
import Grid from "@material-ui/core/Grid";
import SearchInput from "../components/SearchInput";

export default function SearchPage() {
  return (
    <Grid container justify={"center"}>
      <Grid item lg={12} md={12} sm={12}>
        <SearchInput />
      </Grid>
    </Grid>
  );
}
