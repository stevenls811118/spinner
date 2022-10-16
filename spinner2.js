const spinner = (delay) => {
  let animation = ['\r| ', `\r/ `, `\r- `, `\r\\ `, '\r| ', `\r/ `, `\r- `, `\r\\ `];
  for (let i in animation) {
    setTimeout(() => {
      process.stdout.write(animation[i]);
    }, delay * i);
  }
  setTimeout(() => {
    process.stdout.write('\n');
  }, (delay * animation.length + 1));
}

spinner(300);
