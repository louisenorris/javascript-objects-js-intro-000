var playlist = {
  madonna: "material girl",
  cher: "turn back time",
  rupaul: "sissy that walk"
};

function updatePlaylist (playlist, artistName, songTitle) {
  return Object.assign({}, playlist, {[artistName]: 'songTitle'})
}
