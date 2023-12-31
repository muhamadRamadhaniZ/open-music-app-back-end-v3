/* eslint-disable camelcase */
/* eslint linebreak-style: ["error", "windows"] */
const mapDBToModel = ({
  id,
  name,
  year,
  songs,
  cover_url,
}) => ({
  id,
  name,
  coverUrl: cover_url,
  year,
  songs,
});

const mapSongToModel = ({
  id,
  title,
  performer,
}) => ({
  id,
  title,
  performer,
});
const mapSongDetailToModel = ({
  id,
  title,
  year,
  genre,
  performer,
  duration,
  albumId,
}) => ({
  id,
  title,
  year,
  genre,
  performer,
  duration,
  albumId,
});

const mapPlayListToModel = ({
  id,
  name,
  username,
}) => ({
  id,
  name,
  username,
});

const mapPlayListActivityToModel = ({
  username,
  title,
  action,
  time,
}) => ({
  username,
  title,
  action,
  time,
});

module.exports = {
  mapDBToModel,
  mapSongToModel,
  mapSongDetailToModel,
  mapPlayListToModel,
  mapPlayListActivityToModel,
};
