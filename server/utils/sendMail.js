// ? Send a mail with all clips for the week

const sendMail = async (clips, cw, wc) => {
  console.log(`\nKunden für KW${cw} (${wc}-Woche)`)
  clips.forEach((clip) => {
    console.log(`\n# ${clip.name}`)
    console.log(`${clip.duration}sek | Foyer: ${clip.showInFoyer ? 'Ja' : 'Nein'}`)
  })
}

module.exports = sendMail
