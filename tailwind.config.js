/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        discord_blue: "#295DE7",
        discord_blurple: "#7289da",
        discord_purple: "#5865f2",
        discord_green: "#3ba55c",
        discord_serverBg: "#36393f",
        discord_channelsBg: "#2f3136",
        discord_serverNameHoverBg: "#34373c",
        discord_channel: "#8e9297",
        discord_channelHoverBg: "#3a3c43",
        discord_userId: "#b9bbbe",
        discord_iconHoverBg: "#3a3c43",
        discord_userBg: "#292b2f",
        discord_iconHover: "#dcddde",
        discord_chatBg: "#36393f",
        discord_chatHeader: "#72767d",
        discord_chatHeaderBg: "#202225",
        discord_chatInputBg: "#40444b",
        discord_chatInputText: "#dcddde",
        discord_chatInput: "#72767d",
        discord_messageBg: "#32353b",
        discord_message: "#dcddde",
        discord_messageTimeStamp: "#72767d",
        discord_deleteIcon: "#ed4245",
      }
    },
  },
  plugins: [
    require("tailwind-scrollbar-hide")
  ],
}

