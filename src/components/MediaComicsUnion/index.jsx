import { Grid } from "@mui/material";
import MediaComicsLoading from "../MediaComicsLoading";

export default function MediaComicsUnion() {
  return (
    <>
      <Grid key={1} item xs={12} lg={3} md={4} sm={6}>
        <MediaComicsLoading />
      </Grid>
      <Grid key={1} item xs={12} lg={3} md={4} sm={6}>
        <MediaComicsLoading />
      </Grid>
      <Grid key={1} item xs={12} lg={3} md={4} sm={6}>
        <MediaComicsLoading />
      </Grid>
      <Grid key={1} item xs={12} lg={3} md={4} sm={6}>
        <MediaComicsLoading />
      </Grid>
    </>
  )
}
