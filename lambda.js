const WEBHOOK_URL =
  "https://discord.com/api/webhooks/1128055676543963166/txoiZjvUkPtU9KIAbmytmIbRiBStg51JXYfR25-a9YvOSwydsB3S_YMmTyLvVpDLvqYF";

const ENGINEERS_DISCORD_IDS = ["807575070532829185", "351671267767746561"];

const embed = ({ message }) => {
  let embeds = [];
  const urls = message.match(/\bhttps?:\/\/\S+/gi);

  if (message.includes("STARTED")) {
    embeds.push({
      color: 1736669,
      title: "AWS Amplify Deploy Started!",
      description: `프론트엔드 릴리즈 배포가 시작되었어요\n\n**배포 URL**: ${urls[0]}\n[AWS Amplify 대시보드](${urls[1]})`,
    });
  } else if (message.includes("SUCCEED")) {
    embeds.push({
      color: 49943,
      title: "AWS Amplify Deploy Successfully!",
      description: `프론트엔드 릴리즈 배포가 성공적으로 완료되었어요\n\n**배포 URL**: ${urls[0]} / https://hanseithon.com`,
    });
  } else if (message.includes("FAILED")) {
    embeds.push({
      color: 14494234,
      title: "AWS Amplify Deploy FAILED!!!",
      description: `프론트엔드 릴리즈 배포에 실패했어요\n[AWS Amplify 대시보드](${
        urls[1]
      })\n\n${ENGINEERS_DISCORD_IDS.map((id) => `<@${id}>`).join(" ")}`,
    });
  }

  if (embeds.length <= 0) return console.log(message);

  return {
    content: null,
    embeds: [
      Object.assign(embeds[0], { footer: { text: `실행일시: ${new Date().toISOString()}` } }),
    ],
    attachments: [],
  };
};
export const handler = async (event) => {
  const message = event.Records[0].Sns.Message;

  /* global fetch */
  return await fetch(WEBHOOK_URL, {
    method: "POST",
    body: JSON.stringify(embed({ message })),
    headers: { "Content-Type": "application/json" },
  });
};
