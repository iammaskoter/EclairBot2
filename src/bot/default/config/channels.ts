import { Config } from '@/bot/cfg.ts';

export const channelsCfg: Config['channels'] = {
    settings: {
        characters: {
            beforeEmoji: '﹝',
            afterEmoji: '﹞',
        },
        emojiPlacement: 'before-name',
        spaceReplacement: null,
    },
    mod: {
        modGeneral: '1510229839016230986',
        logs: '1510286821848912043',
        warnings: '1510287088258519221',
        hallOfShame: '1510287730330832969',
        modCommands: '1510229839016230986',
        info: '1510229839016230986',
        assets: '1510229839016230986',
    },
    important: {
        lobby: '1235560269871190056',
        rules: '1286058702214008935',
        announcements: '1235560320596967516',
        boosts: '1298706083556229222',
        levels: '1235592947831930993'
    },
    general: {
        general: '1264971505662689311',
        offtopic: '1392567715407073402',
        commands: '1235604839078035537',
        media: '1235567551753486407',
        ei: '1485240944373792918',
    },
    other: {
        music: '1471233436810477610',
        communityPolls: '1320035545543606282',
        desktopPorn: '1279888407421648967',
        minecraft: '1342793182265741394',
        economy: '1235561759448895590',
        files: '1408757368652566591',
        safeChat: "1502335736911888425",
        info: '1429499954979799120'
    },
    forfun: {
        counting: '1235566520310956184',
        lastLetter: '1235566646324887562',
        finishSentence: '1276861659587280896',
        wordAssociation: '1235567493855187025',
        unfiltred: '1397628186795311246',
    },
    isolation: {
        isolationCell: '1415020477180674048',
    },
    eclairbot: {
        stdout: '1419323394440167555',
        stderr: '1419323609419092019',
        stdwarn: '1448385153364656189',
        email: '1479194690233438341',
        dbBackups: '1429118062816137318',
        ghBridge: '1510172368600043590',
    },
    dev: {
        programming: '1426217543617740950',
    },
    stats: {
        bans: '1235591871020011540',
        goal: '1276862197099794514',
        people: '1235591547437973557',
    },
};
