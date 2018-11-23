$(document).ready(function () {
    $('.message-box > a').slackChat('destroy');

    var animals = ["Aardvark","African Wild Dog","Aldabra Tortoise","American Alligator","American Bison","Amur Tiger","Anaconda","Andean Condor","Asian Elephant","Baby Doll Sheep","Bald Eagle","Barred Owl","Blue Iguana","Boer Goat","California Sea Lion","Caribbean Flamingo","Chinchilla","Collared Lemur","Coquerel's Sifaka","Cuban Amazon Parrot","Ebony Langur","Fennec Fox","Fossa","Gelada","Giant Anteater","Giraffe","Gorilla","Grizzly Bear","Henkel's Leaf-tailed Gecko","Indian Gharial","Indian Rhinoceros","King Cobra","King Vulture","Komodo Dragon","Linne's Two-toed Sloth","Lion","Little Penguin","Madagascar Tree Boa","Magellanic Penguin","Malayan Tapir","Malayan Tiger","Matschies Tree Kangaroo","Mini Donkey","Monarch Butterfly","Nile crocodile","North American Porcupine","Nubian Ibex","Okapi","Poison Dart Frog","Polar Bear","Pygmy Marmoset","Radiated Tortoise","Red Panda","Red Ruffed Lemur","Ring-tailed Lemur","Ring-tailed Mongoose","Rock Hyrax","Small Clawed Asian Otter","Snow Leopard","Snowy Owl","Southern White-faced Owl","Southern White Rhinocerous","Squirrel Monkey","Tufted Puffin","White Cheeked Gibbon","White-throated Bee Eater","Zebra"];
    var random_animal = animals[Math.floor(Math.random()*animals.length)];
    const userName = `Dev Knight - ${random_animal}`;

    var slackChatOptions = {
        apiToken: 'xoxp-161319594470-486756096867-487059315941-ace1b60bcd9bf947d0b9b778bb30ee8f', // Legacy Auth Token of @chat_bot
        channelId: 'CEC4Z0BFY',
        user: userName,
        defaultUserImg: '/assets/img/user_icon.png',
        defaultSysImg: '/assets/img/user_icon-default.png',
        defaultSysUser: 'Slack Chat',
        queryInterval: 3000,
        chatBoxHeader: " Questions for the speaker",
        slackColor: "#36a64f",
        messageFetchCount: 100,
        botUser: 'Website Chat',
        sendOnEnter: true,
        disableIfAway: false,
        elementToDisable: null,
        heightOffset: 75,
        debug: false,
        webCache: true,
        privateChannel: false,
        useUserDetails: true,
        defaultInvitedUsers: []
    }

    $('.message-box > a').slackChat(slackChatOptions);
    imojify();
});