// ? Send a mail with all clips for the week

const sendMail = async (clips, cw, wc) => {
  const random = Math.floor(Math.random() * 10)

  console.log(`\nKunden für KW${cw} (${wc}-Woche) (${random})`)
  clips.forEach((clip) => {
    console.log(`\n# ${clip.name}`)
    console.log(`${clip.duration}sek | Foyer: ${clip.showInFoyer ? 'Ja' : 'Nein'}`)
  })
}

module.exports = sendMail
