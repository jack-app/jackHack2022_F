<template>
  <button type="button" class="random-button" @click="setRecipe">
    ランダム
  </button>
</template>

<script>
export default {
  methods: {
    setRecipe() {
      let num = Math.floor(Math.random() * this.menu.length);
      this.$emit('setRecipe', this.menu[num]);
    },
  },
  data: () => ({
    menu: [
      '卵かけご飯',
      'すし飯',
      'ゆで卵',
      'さんま塩焼き',
      'ニンジンサラダ',
      'ピラフ',
      'イカ刺身',
      'フレンチトースト　',
      '茹でトウモロコシ',
      '発芽玄米ごはん',
      '赤飯',
      '蒸し紫芋',
      '蒸しジャガイモ',
      '焼き豆腐',
      '煮豆',
      'しそ葉　　　',
      '糸引き納豆',
      '胡麻豆腐',
      '沖縄そば',
      'ラーメン',
      'マッシュポテト',
      'ポップコーン',
      'ひやむぎ・そうめん',
      'ひきわり納豆',
      'パスタ',
      'コーンフレーク',
      'お蕎麦',
      'インスタント焼きそば',
      'インスタントラーメン',
      'イングリッシュマフィン',
      'チョコバナナ',
      '枝豆',
      'キャベツの千切り',
      'ロースハム',
      'ウインナーソーセージ',
      'チキンナゲット　',
      '鶏つくね　',
      'いなごのつくだ煮　',
      'ピータン　',
      'たまご豆腐',
      'だし巻きたまご　',
      '餃子',
      'コーンクリームスープ',
      'クリームコロッケ　',
      'ポテトコロッケ',
      'イカフライ',
      'エビフライ',
      '白身魚フライ',
      'ビーフシチュー',
      '豆腐の味噌汁',
      'さんま塩焼き',
      '野菜サラダ',
      'もろきゅう',
      '親子丼',
      '納豆',
      '焼きししゃも',
      'トースト',
      '柏餅',
      '草餅',
      '桜餅関東風',
      '茹でたホウレン草',
      '豚汁',
      'ピザ',
      '素うどん',
      '鯖の塩焼き',
      '鮭塩焼き',
      '味噌汁',
      'たこ焼き',
      'ごぼ天うどん',
      '握り寿司',
      '焼き鳥',
      'やきとり',
      'ソーセージ',
      '蒸し鶏',
      'マグロ刺身',
      '焼きうどん',
      'ローストビーフ',
      'オムレツ',
      'キッシュ',
      'スパゲティミートソース',
      'ビーフシチュー',
      'けんちん汁',
      '牛丼',
      'サンドイッチ',
      '海藻サラダ',
      'サーロインステーキ',
      'カボチャの天ぷら',
      'シソの天ぷら',
      'タマネギの天ぷら',
      '茄子の天ぷら',
      'シイタケの天ぷら',
      'ゲソの天ぷら',
      'ざる蕎麦',
      'タコライス',
      'チャーハン',
      '青椒肉絲',
      'ベーグル',
      'ミニトマト',
      '塩おにぎり',
      'だて巻　　　　',
      '豚足',
      '生ハム',
      'ベーコン',
      '焼き豚',
      '厚焼きたまご　',
      '海老グラタン',
      'メンチカツ',
      '赤飯',
      '目玉焼き',
      '雑穀米',
      '中華スープ',
      'チャンポン',
      '鮭のチタタプ',
      '海鮮丼',
      'ビーフカレーライス',
      'てりやきチキン',
      'グラノーラ',
      'ノニピューレタイプ',
      'チキン南蛮',
      'アスパラベーコン',
      'ドライカレー',
      'グミキャンディー',
      '炊き込みご飯',
      '鍋焼きうどん',
      'スパサラダ',
      'パスタサラダ',
      '豆腐ハンバーグ',
      '豚肉の生姜焼き',
      'タラの甘酢あんかけ',
      'スクランブルエッグ',
      '鍋焼きうどん',
      '天丼',
      '牛丼',
      '親子丼',
      'かつ丼',
      '豚丼',
      '牛ユッケ丼',
      'ビビンバ',
      '牛そぼろ丼',
      'プルコギ丼',
      'ネギトロ丼',
      '卵と鶏のそぼろ丼',
      '鶏そぼろ丼',
      '納豆アボカド丼',
      'しらす丼',
      '海鮮丼',
      'マグロユッケ丼',
      '鉄火丼',
      'ウニイクラ丼',
      '牛肉のたたき',
      'リゾット',
      'パクチーサラダ',
      'ハンバーガー',
      'チーズバーガー',
      'カフェラテ',
      'ナポリタン',
      'ゴーヤチャンプルー',
      '卵焼き',
      'ホットドッグ',
      '納豆巻き',
      '野菜スープ',
      '卵サンド',
      'オムライス',
      '肉寿司',
      'お雑煮',
      'ミニハンバーグ',
      'キャベツサラダ',
      'きゃべつさらだ',
      'キノコサラダ',
      'お茶漬け',
      '砂肝炒め',
      '小籠包',
      '野菜炒め',
      'カルボナーラ',
      '肉じゃが',
      '冷やし中華',
      'ナスの胡麻和え',
      '水餃子',
      'シリアル',
      'チャーシュー',
      'プチトマト',
      'もずく酢',
      'オニオンリング',
      '鰺の南蛮漬け',
      'ポテトサラダ',
      'ハヤシライス',
      'わかめご飯',
      '焼きおにぎり',
      'わかめとしらすの酢の物',
      '青菜のお浸し',
      '鶏ハム',
      'とりはむ',
      '肉豆腐',
      'もやしのナムル',
      'マカロニサラダ',
      'こんにゃく田楽',
      '大根餅',
      'にんじんのきんぴら',
      'ピザトースト',
      '韓国冷麺',
      '焼売',
      'チヂミ',
      '焼そば',
      'コールスローサラダ',
      'ボンゴレビアンコ',
      'クラムチャウダー',
      'かぼちゃの煮物',
      '茶碗蒸し',
      '焼きビーフン',
      '温泉卵',
      'キャロットラペ',
      '豚の角煮',
      'スコーン',
      'ペペロンチーノ',
      'テマナシェイプマーベラスマンゴー',
      'エンハンスト　サイボーグッド',
      'エンハンスト　オトグッド',
      'チャプチェ',
      'ふかしいも',
      'ケールサラダ',
      'たまごスープ',
      'アクアパッツァ',
      '目玉焼き',
    ],
  }),
};
</script>

<style scoped>
.random-button {
  width: 90px;
  height: 40px;
  border-radius: 4px;
  background: darkcyan;
  border: none;
  color: #fff;
  font-weight: bold;
  font-size: 16px;
  margin: 20px;
  z-index: 1000;
}
</style>
