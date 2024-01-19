import { Grid } from "@mui/material";
import MediaCard from "../MediaLoading";

export default function MediaLoadingUnion() {
  return (
    <>
      <Grid key={1} item xs={12} lg={3} md={4} sm={6}>
        <MediaCard />
      </Grid>
      <Grid key={1} item xs={12} lg={3} md={4} sm={6}>
        <MediaCard />
      </Grid>
      <Grid key={1} item xs={12} lg={3} md={4} sm={6}>
        <MediaCard />
      </Grid>
      <Grid key={1} item xs={12} lg={3} md={4} sm={6}>
        <MediaCard />
      </Grid>
    </>
  )
}
