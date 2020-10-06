// ? Send a mail with all clips for the week

const sendMail = async (clips, cw) => {
  console.log(`\nKunden für KW${cw}`)
  clips.forEach((clip) => {
    console.log(`# ${clip.name}`)
    console.log(`${clip.duration}sek | Foyer: ${clip.showInFoyer ? 'Ja' : 'Nein'}`)
  })
}

module.exports = sendMail
