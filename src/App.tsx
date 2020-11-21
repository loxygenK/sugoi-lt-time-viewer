import React, { FC } from "react";
import { LTTimeViewer } from "./comps/LTTimeViewer";
import { LTData } from "./types/LTData";

const App: FC = () => {
  const ltData: LTData = {
    title: "限界LT#2",
    subTitle: "準備中です",
    detail: {
      presenter: {
        twitterId: "loxygen_k",
        name: "フライさん",
      },
      presentTitle: "ZshとFish、どちらを使うべきか",
      presentDescription:
        "無難で、ユーザ数も多いZshと、\n" +
        "カスタマイズしやすく補完も強いがPOSIX非互換のFish、\n" +
        "どちらも一長一短である。\n" +
        "我々はどちらを選ぶべきだろうか？",
      tags: ["環境構築", "Linux", "シェル"],
    },
  };

  return (
    <div>
      <LTTimeViewer ltData={ltData} />
    </div>
  );
};

export default App;
