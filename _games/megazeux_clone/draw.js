export function draw_sprite(sprite, pos, pixel_width = 1) {
  for (var r = 0; r < sprite.length; r++) {
    var row = sprite[r];
    for (var c = 0; c < row.length; c++) {
      var p = row[c];
      if (p) {
        draw_pixel(pos.x + c, pos.y + r, pixel_width);
      }
    }
  }
}

export function draw_pixel(x, y, pixel_width = 1) {
  var x_pos = x * pixel_width, y_pos = y * pixel_width;
  rect(x_pos, y_pos, pixel_width, pixel_width);
}
