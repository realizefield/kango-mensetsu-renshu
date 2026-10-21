// 看護学校 面接練習ページの設定
// 合言葉の変更方法：index.html を「index.html#setup」で開き、新しい合言葉を入力して表示された passHash を下に貼り付けます。
window.APP_CONFIG = {
  title: '看護学校 面接練習',
  // 初期の合言葉は「kango2026」です。必ず変更してからご利用ください。
  passHash: '1vume4wj82t',
  defaultSeconds: 60,

  // ---- AI採点・成績の記録（Google Apps Script）。使わない場合は空のままにします ----
  // 公務員版とは別のスプレッドシート・別の Apps Script を作って設定してください（README.txt の【4】）。
  endpoint: '',
  appToken: ''
};
