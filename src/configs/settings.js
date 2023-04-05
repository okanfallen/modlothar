/**
 * Client Settings
 * @param { Client } client 
 */

 module.exports = (client) => {

    //General Settings
    client.settings = {

        Prefix: ".",
        Token: "MTA5Mjc2MTU4NTI2NjcyODk3MA.GrwWP9.IxdwtcQgOrAaSALnoJT4PTf96pz7jyv0zTJ0KA",
        Owners: ["325339036971696128"],
        OtherBots: ["1040694812719988767", "1040417733554212935"],
        VoiceChannel: "1092519777467105322",
        Activity: "LISTENING",
        Status: "idle",
        MongoURL: "mongodb+srv://okan1:okan2@cluster0.k8yzgun.mongodb.net/?retryWrites=true&w=majority",
        Footer: "",
        DisableCooldownsForAdmins: true,

    };

    //Activity Messages
    client.statusMessages = [

        "Lothar"

    ];

    //Emojis
    client.systemEmojis = [

        ///System
        { emojiName: 'developer', emojiUrl: 'https://cdn.discordapp.com/emojis/853642013332865035.gif?v=1' },
        { emojiName: 'loading', emojiUrl: 'https://cdn.discordapp.com/emojis/857935194203226118.gif?v=1' },
        { emojiName: 'arrow', emojiUrl: 'https://cdn.discordapp.com/emojis/821298641863442442.gif?v=1' },
        { emojiName: 'crown', emojiUrl: 'https://cdn.discordapp.com/emojis/876942324909871114.gif?v=1' },
        { emojiName: 'crown2', emojiUrl: 'https://cdn.discordapp.com/emojis/876929331572662323.gif?v=1' },
        { emojiName: 'mark', emojiUrl: 'https://cdn.discordapp.com/emojis/876153262796079115.gif?v=1' },
        { emojiName: 'mark2', emojiUrl: 'https://cdn.discordapp.com/emojis/853641429146140684.png?v=1' },
        { emojiName: 'cross', emojiUrl: 'https://cdn.discordapp.com/emojis/876153078863253514.gif?v=1' },
        { emojiName: 'cross2', emojiUrl: 'https://cdn.discordapp.com/emojis/853641452227264522.png?v=1' },
        { emojiName: 'success', emojiUrl: 'https://cdn.discordapp.com/emojis/793774156067373066.gif?v=1' },

        ///Status
        { emojiName: 'online', emojiUrl: 'https://cdn.discordapp.com/emojis/686601950275698692.png?v=1' },
        { emojiName: 'dnd', emojiUrl: 'https://cdn.discordapp.com/emojis/686601950355390545.png?v=1' },
        { emojiName: 'idle', emojiUrl: 'https://cdn.discordapp.com/emojis/686601950069915667.png?v=1' },
        { emojiName: 'offline', emojiUrl: 'https://cdn.discordapp.com/emojis/686601950686609420.png?v=1' },
        { emojiName: 'web', emojiUrl: 'https://cdn.discordapp.com/emojis/825429354707288065.png?v=1' },

        ///Penal
        { emojiName: 'banned', emojiUrl: 'https://cdn.discordapp.com/emojis/748618263071555645.gif?v=1' },
        { emojiName: 'jailed', emojiUrl: 'https://cdn.discordapp.com/emojis/878303820181024788.png?v=1' },
        { emojiName: 'chatMuted', emojiUrl: 'https://cdn.discordapp.com/emojis/878303318743609384.png?v=1' },
        { emojiName: 'warned', emojiUrl: 'https://cdn.discordapp.com/emojis/826369282942042112.png?v=1' },

        ///Voice
        { emojiName: 'joined', emojiUrl: 'https://cdn.discordapp.com/emojis/742688545977794560.gif?v=1' },   
        { emojiName: 'leaved', emojiUrl: 'https://cdn.discordapp.com/emojis/742688545168293968.gif?v=1' },
        { emojiName: 'unMuted', emojiUrl: 'https://cdn.discordapp.com/emojis/871710450633564271.png?v=1' },
        { emojiName: 'muted', emojiUrl: 'https://cdn.discordapp.com/emojis/871710451086524416.png?v=1' },
        { emojiName: 'unDeafen', emojiUrl: 'https://cdn.discordapp.com/emojis/871710450243502091.png?v=1' },
        { emojiName: 'deafen', emojiUrl: 'https://cdn.discordapp.com/emojis/871710450138619915.png?v=1' },
        { emojiName: 'camera', emojiUrl: 'https://cdn.discordapp.com/emojis/839043294717542400.png?v=1' }

    ];

    //Guild Settings     
    client.guildSettings = {

        ///General
        guildID: "747551730002034720",
        guildTags: [],
        guildDiscriminator: "1111",
        guildTeams: ["1092519485719720036"],
        meetRole: "1092519457588523068",
        meetChannel: "1092519580842344509",
        nameTag: "",
        dmMessages: true,
        unAuthorizedMessages: true,

        ///Staffs
        staffRoles: ["1092519410364846090"],
        transporterSpears: ["1092519410364846090"],
        registerSpears: ["1092519432825360385"],
        staffGiver: "1092519438101790721",
        botYt: "1092519410364846090",

        ///Penals
        penals: {

            ///Ban
            ban: {
                staffs: ["1092519438101790721"],
                penalPoint: 40,
                penalLimit: 5,
                log: "1092763105362194533",
                banGifs: [''],
                unbanGifs: [''],
            },

            ///Jail
            jail: {
                staffs: ["1092519438101790721"],
                jailRoles: ["1092519460092518472"],
                jailChannel: "",
                penalPoint: 30,
                penalLimit: 5,
                log: "1092763185712484403",
            },

            ///Chat Mute
            chatMute: {
                staffs: ["1092519438101790721"],
                cmuteRoles: ["1092519461891870730"],
                penalPoint: 20,
                penalLimit: 5,
                log: "1092763200753238026",
            },

            ///Voice Mute
            voiceMute: {
                staffs: ["1092519438101790721"],
                vmuteRoles: ["1092519460981710878"],
                penalPoint: 20,
                penalLimit: 5,
                log: "1092832881484767242",
            },

            ///Warn
            warn: {
                staffs: ["1092519438101790721"],
                warnRoles: [{
                    warnCount: 1,
                    warnRole: "", 
                }, {
                    warnCount: 2,
                    warnRole: "",
                }, {
                    warnCount: 3,
                    warnRole: "",
                }],
                penalPoint: 10,
                log: "1092519748740321320",
            },

        },

        ///Registration
        registration: {
            unregisterName: "İsim | Yaş",
            unregisterRoles: ["1092519493537910874"],
            unregisterChannel: "1092519569744207882",
            quarantineRole: "1092519458578374776",
            familyRole: "1092519485719720036",
        },

        ///Forbidden Tag
        forbiddenTag: {
            forbidRoles: [],
            forbidChannel: "",
            forbidLog: "",
        },

        ///Logs
        logs: {
            pointLog: "1092732557306630164",
            voiceLog: "1092763670511112272",
            messageLog: "1092763628471603293",
            securityLog: "1092534899363287141",
        },

    };

};