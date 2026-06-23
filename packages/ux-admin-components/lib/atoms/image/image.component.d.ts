import * as i0 from "@angular/core";
export declare enum EImgMode {
    LIGHT = "light",
    DARK = "dark"
}
export declare enum ImgEntityType {
    PLACEHOLDER_ACTIONS = "actions",
    PLACEHOLDER_PROCESSES = "processes",
    PLACEHOLDER_LOGS = "logs",
    PLACEHOLDER_RULES = "rules",
    PLACEHOLDER_NO_CONTENT = "nocontent",
    PLACEHOLDER_UPGRADE_POPUP = "upgrade",
    PLACEHOLDER_NO_EXPERTS = "noExperts",
    PLACEHOLDER_EMPTY_KNOWLEDGE = "emptyKnowledge",
    PLACEHOLDER_EMPTY_TRAININGS_ASSIGNED = "emptyTrainingsAssigned",
    PLACEHOLDER_ERROR_PAGE_NOT_FOUND = "errorPageNotFound",
    PLACEHOLDER_ERROR_TECHNICAL = "errorTechnical",
    PLACEHOLDER_NO_NEWSLETTERS = "noNewsletters",
    PLACEHOLDER_NEWSLETTER = "newsletter",
    PLACEHOLDER_NO_EXTENDED_FIELDS = "noExtendedFields",
    PLACEHOLDER_NO_CUSTOM_APPS = "noCustomApps",
    PLACEHOLDER_PROFILE_IMAGE_32 = "profileImage32",
    PLACEHOLDER_PROFILE_IMAGE_40 = "profileImage40",
    PLACEHOLDER_PHOTO_BROWSER_IMAGE_112 = "photoBrowserImage112",
    PLACEHOLDER_PHOTO_BROWSER_IMAGE_120 = "photoBrowserImage120",
    PLACEHOLDER_PHOTO_BROWSER_IMAGE_160 = "photoBrowserImage160",
    PLACEHOLDER_AI_PROFILE_PHOTO_32 = "aiProfilePhoto32",
    PLACEHOLDER_AI_PROFILE_PHOTO_40 = "aiProfilePhoto40",
    PLACEHOLDER_AI_PROFILE_PHOTO_64 = "aiProfilePhoto",
    PLACEHOLDER_AI_PROFILE_PHOTO_160 = "aiProfilePhoto160",
    PLACEHOLDER_ACTION_SHARE = "actionShare",
    PLACEHOLDER_ACTION_SHARE_REMOVE = "actionShareRemove",
    PLACEHOLDER_ACTION_USERS = "actionUsers",
    PLACEHOLDER_ACTION_USERS_REMOVE = "actionUsersRemove",
    PLACEHOLDER_ACTION_NOTIFICATIONS = "actionNotifications",
    PLACEHOLDER_ACTION_BADGES = "actionBadges",
    PLACEHOLDER_ACTION_EXTENDED_FIELDS = "actionExtendedFields",
    PLACEHOLDER_ACTION_NOT_LOADED = "actionNotLoaded",
    PLACEHOLDER_ACTION_NO_IMAGE = "actionNoImage",
    PLACEHOLDER_ACTION_SKELETON = "actionSkeleton",
    PLACEHOLDER_ACTION_CROSS_NOTIFICATION = "actionCrossNotification",
    PLACEHOLDER_ACTION_USERS_CHALLENGE = "actionUsersChallenge",
    PLACEHOLDER_ACTION_USERS_CHALLENGE_REMOVE = "actionUsersChallengeRemove",
    PLACEHOLDER_ACTION_USERS_TRAINING = "actionUsersTraining",
    PLACEHOLDER_ACTION_USERS_TRAINING_REMOVE = "actionUsersTrainingRemove",
    PLACEHOLDER_ACTION_USERS_PLAYLIST = "actionUsersPlaylist",
    PLACEHOLDER_ACTION_USERS_PLAYLIST_REMOVE = "actionUsersPlaylistRemove",
    PLACEHOLDER_PLAYLIST = "playlist",
    PLACEHOLDER_COURSE = "course",
    PLACEHOLDER_NO_USERS = "noUsers",
    PLACEHOLDER_LOGO_MAILCHIMP = "logoMailchimp",
    PLACEHOLDER_LOGO_GOOGLESHEETS = "logoGoogleSheets",
    PLACEHOLDER_LOGO_HUBSPOT = "logoHubspot",
    PLACEHOLDER_LOGO_AUTOMATE = "logoAutomate",
    PLACEHOLDER_LOGO_DRIVE = "logoDrive",
    PLACEHOLDER_LOGO_EXPERTS = "logoExperts",
    PLACEHOLDER_LOGO_NETEX_CLOUD = "logoNetexCloud",
    PLACEHOLDER_LOGO_AI_EXPERTS = "logoAiExperts",
    PLACEHOLDER_PRODUCT_LMS = "productLMS",
    PLACEHOLDER_PRODUCT_SHARE = "productShare",
    PLACEHOLDER_PRODUCT_AUTHOR = "productAuthor",
    PLACEHOLDER_PRODUCT_AUTOMATE = "productAutomate",
    PLACEHOLDER_PRODUCT_DRIVE = "productDrive",
    ICON_ANIMATED_UPLOAD = "upload",
    ICON_ANIMATED_WAIT = "wait",
    ICON_ANIMATED_DEFAULT = "default"
}
export declare class ImageComponent {
    ImgEntityType: typeof ImgEntityType;
    imgEntityType: ImgEntityType;
    mode: EImgMode;
    static ɵfac: i0.ɵɵFactoryDeclaration<ImageComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ImageComponent, "admin-image", never, { "imgEntityType": { "alias": "imgEntityType"; "required": false; }; "mode": { "alias": "mode"; "required": false; }; }, {}, never, never, true, never>;
}
