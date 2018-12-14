{
  $('#album-title').text(album.title);
  $('img#album-cover-art').attr('src', album.albumArtUrl);
  //map the artist from album object
  $('.artist').text(album.artist);
  //map the release info from album object
  $('#release-info').text(album.releaseInfo);
}
