import React, { useEffect, useState } from "react";
import { useDataLayerValue } from "./DataLayer";
import "../css/Footer.css";
import Slider from '@mui/material/Slider';
import Grid from '@mui/material/Grid';

function Footer({ spotify }) {
  const [{ token, item, playing }, dispatch] = useDataLayerValue();

  useEffect(() => {
    spotify.getMyCurrentPlaybackState().then((r) => {
      console.log(r);

      dispatch({
        type: "SET_PLAYING",
        playing: r.is_playing,
      });

      dispatch({
        type: "SET_ITEM",
        item: r.item,
      });
    });
  }, [spotify,dispatch]);

  const handlePlayPause = () => {
    if (playing) {
      spotify.pause();
      dispatch({
        type: "SET_PLAYING",
        playing: false,
      });
    } else {
      spotify.play();
      dispatch({
        type: "SET_PLAYING",
        playing: true,
      });
    }
  };

  const skipNext = () => {
    spotify.skipToNext();
    spotify.getMyCurrentPlayingTrack().then((r) => {
      dispatch({
        type: "SET_ITEM",
        item: r.item,
      });
      dispatch({
        type: "SET_PLAYING",
        playing: true,
      });
    });
  };

  const skipPrevious = () => {
    spotify.skipToPrevious();
    spotify.getMyCurrentPlayingTrack().then((r) => {
      dispatch({
        type: "SET_ITEM",
        item: r.item,
      });
      dispatch({
        type: "SET_PLAYING",
        playing: true,
      });
    });
  };

  return (
    <div className="footer">
      <div className="footer__left">
        <img
          className="footer__albumLogo"
          src={item?.album.images[0].url}
          alt={item?.name}
        />
        {item ? (
          <div className="footer__songInfo">
            <h4>{item.name}</h4>
            <p>{item.artists.map((artist) => artist.name).join(", ")}</p>
          </div>
        ) : (
          <div className="footer__songInfo">
            <h4>No song is playing</h4>
            <p>...</p>
          </div>
        )}
      </div>

      <div className="footer__center">
      <i class="fa-solid fa-shuffle footer__green"></i>
        <i onClick={skipNext} class="footer__icon fa-solid fa-backward-fast"></i>
        {playing ? (
          <i style={{fontSize:"large"}} onClick={handlePlayPause} class="fa-solid fa-circle-pause footer__icon"></i>
        ) : (
          <i style={{fontSize:"large"}} onClick={handlePlayPause} class="fa-solid fa-circle-play footer__icon"></i>
        )}
        <i onClick={skipPrevious} class="footer__icon fa-solid fa-forward-step"></i>
        <i class="footer__green fa-solid fa-arrow-rotate-right"></i>
        
      </div>
      <div className="footer__right">
        <Grid container spacing={2}>
          <Grid item>
          <i class="fa-solid fa-volume-high VolumeButton"></i>
          </Grid>
          <Grid item xs>
          <Slider
        size="small"
        defaultValue={70}
        aria-label="Small"
        sx={{color: 'blue'}}
        valueLabelDisplay="auto"
      />
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default Footer;