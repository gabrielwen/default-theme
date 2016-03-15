(()=>{
  interface SupportedLanguages { 
    en: string, iw: string, 
    pt: string, zh: string, fr: string, hi: string
  };
  interface Translations {
    [index: string]: SupportedLanguages;
  }
  let platformTranslations: Translations = {
    "GAME_INVITE_INSTALL_APP_FROM": {
      "en": "Install {{GAME_NAME}} app from: ",
      "iw": "התקן את האפליקציה {{GAME_NAME}}  מ:",
      "pt": "Installar {{GAME_NAME}}",
      "zh": "安装{{GAME_NAME}}这游戏从：",
      "fr": "Installez l'application {{GAME_NAME}} à partir de",
      "hi": "{{GAME_NAME}} अनुप्रयोग से स्थापित करें:"
    },
    "GAME_INVITE_INSTALL_APP_FROM_APPLE_APPSTORE": {
      "en": "AppStore (for iPhones or iPads)",
      "iw": "חנות האפליקציות של אפל",
      "pt": "AppStore (para iPhones ou iPads)",
      "zh": "苹果商店",
      "fr": "AppStore ( pour les iPhones ou iPads )",
      "hi": "ऐप स्टोर ( आईफ़ोन या आईपैड के लिए )"
    },
    "GAME_INVITE_INSTALL_APP_FROM_GOOGLE_PLAY": {
      "en": "Google Play (for Android phones)",
      "iw": "חנות האפליקציות של גוגל",
      "pt": "Google Play (para telefones Android)",
      "zh": "谷歌玩玩",
      "fr": "Google Play ( pour les portables Android )",
      "hi": "( एंड्रॉयड फोन के लिए ) गूगल प्ले"
    },
    "GAME_INVITE_OPEN_OR_INSTALL_GAME_NAME": {
      "en": "Open or install {{GAME_NAME}}",
      "iw": "פתח או התקן {{GAME_NAME}}",
      "pt": "Abrir ou installar {{GAME_NAME}}",
      "zh": "打开或者安装{{GAME_NAME}}",
      "fr": "Ouvrez ou installer {{GAME_NAME}}",
      "hi": "खोलें या स्थापित करें {{GAME_NAME}}"
    },
    "GAME_INVITE_PLAYER_NAME_WANTS_TO_PLAY_GAME_NAME_WITH_YOU": {
      "en": "{{PLAYER_NAME}} wants to play {{GAME_NAME}} with you!",
      "iw": "{{PLAYER_NAME}} רוצה לשחק איתך {{GAME_NAME}}!",
      "pt": "{{PLAYER_NAME}} quer jogar {{GAME_NAME}} com você",
      "zh": "{{PLAYER_NAME}}想和你一起玩{{GAME_NAME}}",
      "fr": "{PLAYER_NAME}} veut jouer {{GAME_NAME}} avec vous!",
      "hi": "{{PLAYER_NAME}} खेलना चाहता {{GAME_NAME}} आप के साथ !"
    },
  };
  
  gamingPlatform.gameinvite.main.l10n().setTranslations(<any>platformTranslations);
})();