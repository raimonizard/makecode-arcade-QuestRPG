namespace SpriteKind {
    export const Stuff = SpriteKind.create()
    export const Teleport = SpriteKind.create()
    export const NPC = SpriteKind.create()
    export const casa = SpriteKind.create()
    export const Citizen1 = SpriteKind.create()
    export const Citizen2 = SpriteKind.create()
    export const Citizen3 = SpriteKind.create()
    export const Mayor1 = SpriteKind.create()
    export const Mayor2 = SpriteKind.create()
    export const Peaceful_mob = SpriteKind.create()
    export const Snake_mob = SpriteKind.create()
    export const Crab_mob = SpriteKind.create()
    export const Monster_mob = SpriteKind.create()
    export const Phantom_mob = SpriteKind.create()
    export const Phantom_boss_mob = SpriteKind.create()
    export const enemie_projectile = SpriteKind.create()
    export const Villagers = SpriteKind.create()
}

// Variables
let dx = 0
let dy = 0
let radians = 0
let projectile50 : Sprite = null
let sprite_house4 : Sprite = null
let sprite_house2 : Sprite = null
let conversation_done7 = false
let phantom_boss : Sprite = null
let conversation_done6 = false
let snake : Sprite = null
let sprite_house3 : Sprite = null
let statusbar : StatusBarSprite = null
let statusbarboss : StatusBarSprite = null
let citizen_mayor2 : Sprite = null
let citizen_mayor : Sprite = null
let citizen_jake3 : Sprite = null
let citizen_jake2 : Sprite = null
let citizen_jake : Sprite = null
let PC_master : Sprite = null
let chest_1_open = false
let chest_2_open = false
let chest_3_open = false
let chest_lava_open = false
let a = 0
let speedy222 = 300
// SpeedYSpritePrincipal
let speedx222 = 300
// SpeedXSpritePrincipal
let projectile : Sprite = null
let list_mobcap_snake3 : Sprite[] = []
let list_mobcap_snake2 : Sprite[] = []
let list_mobcap_snake1 : Sprite[] = []
let list_mobcap_crab4 : Sprite[] = []
let list_mobcap_crab3 : Sprite[] = []
let list_mobcap_crab2 : Sprite[] = []
let list_mobcap_crab1 : Sprite[] = []
let list_mobcap_fish8 : Sprite[] = []
let list_mobcap_fish7 : Sprite[] = []
let list_mobcap_fish6 : Sprite[] = []
let list_mobcap_fish5 : Sprite[] = []
let list_mobcap_fish4 : Sprite[] = []
let list_mobcap_fish3 : Sprite[] = []
let list_mobcap_fish2 : Sprite[] = []
let list_mobcap_fish1 : Sprite[] = []
let list_mobcap_enemyMobs2 : Sprite[] = []
let list_mobcap_enemyMobs1 : Sprite[] = []
let list_mobcap_phantom : Sprite[] = []
let list_mobcap_phantomboss : Sprite[] = []
let inventory : string[] = []
let conversation_done5 = false
let enemymobs_killed : number[] = []
let sprite_house1 : Sprite = null
let user_option = ""
let keep_asking = false
let conversation_done = false
let NPC_master : Sprite = null
let mySprite : Sprite = null
let direction = 0
let warning_text = ""
let number_of_keys = 0
let reward2222 = ""
let b = 0
let count = 0
let boss_destroyed = false
let last_digit = 0
let citizen_jake4 = null
let PC_master2 = null
let crab_killed2 = 0
let snake_killed2 = 0
let phantom_killed2 = 0
let citizen_jake22 = null
let citizen_jake32 = null
let citizen_mayor3 = null
let citizen_mayor22 = null
let enemyMonster2 = null
let spawn_number_mobs_fish = 0
let spawn_number_mobs2 = 0
let spawn_number_mobs = 0
let enemy_kills = 0
let os1 = false
warning_text = "Abans d'utilitzar al teletransportador, ves a veure al mag"
direction = 0
let height = 160
let width = 120
let nestedMenu : miniMenu.MenuSprite = null
let LegsMenu : miniMenu.MenuSprite = null
let torsoMenu : miniMenu.MenuSprite = null
let headMenu : miniMenu.MenuSprite = null
let myMenu : miniMenu.MenuSprite = null
scene.setBackgroundColor(12)
let metaMenu = miniMenu.createMenu(miniMenu.createMenuItem("MENU"), miniMenu.createMenuItem("Dificultat"))
metaMenu.onButtonPressed(controller.A, function on_button_pressed10(selection11: any, selectedIndex11: any) {
    metaMenu.close()
    if (selectedIndex11 == 0) {
        framedMenu()
    } else {
        framedMenu()
    }
    
})
function framedMenu() {
    
    myMenu = miniMenu.createMenu(miniMenu.createMenuItem("Fàcil"), miniMenu.createMenuItem("Mitjà"), miniMenu.createMenuItem("Difícil"), miniMenu.createMenuItem("Extrem"))
    myMenu.setMenuStyleProperty(miniMenu.MenuStyleProperty.Width, 100)
    myMenu.setMenuStyleProperty(miniMenu.MenuStyleProperty.Height, 60)
    myMenu.y = 60
    myMenu.x = 80
    myMenu.setFrame(img`
        88888..8888888888888888....88888.
                87768888777877787778777888867778.
                87777686767876767678767688777778.
                87767767667676676676766786776768.
                8677676767767767677677678676778..
                .877768777686767776867678667768..
                .886668888888888888888888886688..
                .888888866666666666666668877768..
                88677786666666666666666668766778.
                87766686666666666666666668776678.
                87667786666666666666666668677778.
                87777686666666666666666668866888.
                88866886666666666666666668677778.
                87777686666666666666666668776678.
                87667786666666666666666668666778.
                87766786666666666666666668777688.
                88677786666666666666666668766778.
                87766686666666666666666668776678.
                87667786666666666666666668677778.
                87777686666666666666666668866888.
                88866886666666666666666668677778.
                87777686666666666666666668776678.
                87667786666666666666666668666778.
                87766786666666666666666668777688.
                .867778866666666666666668888888..
                .886688888888888888888888866688..
                .867766876768677767686777867778..
                .8776768767767767677677676767768.
                86767768766767667667676676776778.
                87777788676787676767876768677778.
                87776888877787778777877788886778.
                88888..88888888888888888....8888.
                .................................
    `)
    myMenu.setStyleProperty(miniMenu.StyleKind.Default, miniMenu.StyleProperty.Background, 6)
    myMenu.setStyleProperty(miniMenu.StyleKind.Default, miniMenu.StyleProperty.Foreground, 1)
    controller.player1.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Pressed, function on_button_event_a_pressed() {
        game2()
    })
}

function game2() {
    myMenu.close()
    info.setLife(10)
    let mySprite = sprites.create(assets.image`
        mySprite
    `, SpriteKind.Player)
    animation.runImageAnimation(mySprite, assets.animation`
        myAnim
    `, 200, true)
    let NPC_master = sprites.create(assets.image`
        npc_master
    `, SpriteKind.NPC)
    NPC_master.setPosition(200, 50)
    tiles.setCurrentTilemap(tilemap`level0`)
    scene.centerCameraAt(20, 20)
    //  Generar todos los NPCs del mapa
    function create_all_NPCs() {
        
        PC_master = sprites.create(assets.image`
            npc_master
        `, SpriteKind.NPC)
        citizen_jake = sprites.create(assets.image`
            Citizen1
        `, SpriteKind.Citizen1)
        citizen_jake2 = sprites.create(assets.image`
            citizen2
        `, SpriteKind.Citizen2)
        citizen_jake3 = sprites.create(assets.image`
            Citizen1
        `, SpriteKind.Citizen3)
        citizen_mayor = sprites.create(assets.image`
            citizen_mayor
        `, SpriteKind.Mayor1)
        citizen_mayor2 = sprites.create(assets.image`
            citizen_mayor
        `, SpriteKind.Mayor1)
        let villager_1 = sprites.create(assets.image`
            villager1
        `, SpriteKind.Villagers)
        let villager_2 = sprites.create(assets.image`
            villager4
        `, SpriteKind.Villagers)
        let villager_3 = sprites.create(assets.image`
            villager6
        `, SpriteKind.Villagers)
        let villager_4 = sprites.create(assets.image`
            villager4
        `, SpriteKind.Villagers)
        PC_master.setPosition(100, 60)
        citizen_jake.setPosition(520, 185)
        citizen_jake2.setPosition(260, 465)
        citizen_jake3.setPosition(1475, 670)
        citizen_mayor.setPosition(1140, 175)
        villager_1.setPosition(1433, 150)
        villager_2.setPosition(1525, 175)
        citizen_mayor2.setPosition(490, 1165)
        villager_3.setPosition(260, 1483)
        villager_4.setPosition(487, 1723)
    }
    
    //  Funciónes para crear montruos enemigos
    function create_mob_cap(list_mob: Sprite[], how_many_mobs: number) {
        let enemyMonster: Sprite;
        
        for (let index = 0; index < how_many_mobs; index++) {
            enemyMonster = sprites.create(assets.image`
                monster
            `, SpriteKind.Monster_mob)
            statusbar = statusbars.create(20, 3, StatusBarKind.Health)
            statusbar.setColor(2, 13)
            statusbar.setStatusBarFlag(StatusBarFlag.SmoothTransition, true)
            statusbar.attachToSprite(enemyMonster)
            sprites.setDataNumber(enemyMonster, "HP", 3)
            animation.runImageAnimation(enemyMonster, assets.animation`
                    monster_anim
                `, 200, true)
            list_mob.push(enemyMonster)
        }
    }
    
    function create_mob_cap_snake(list_mob22222: Sprite[], how_many_mobs2: number) {
        
        for (let index2 = 0; index2 < how_many_mobs2; index2++) {
            snake = sprites.create(assets.image`
                snake
            `, SpriteKind.Snake_mob)
            animation.runImageAnimation(snake, assets.animation`
                    snake_anim
            `, 200, true)
            statusbar = statusbars.create(30, 3, StatusBarKind.Health)
            statusbar.setColor(2, 13)
            statusbar.setStatusBarFlag(StatusBarFlag.SmoothTransition, true)
            statusbar.attachToSprite(snake)
            sprites.setDataNumber(snake, "HP", 4)
            list_mob22222.push(snake)
        }
    }
    
    function create_mob_cap_fish(list_mob22: Sprite[], how_many_mobs5: number) {
        let fish: Sprite;
        for (let index5 = 0; index5 < how_many_mobs5; index5++) {
            fish = sprites.create(assets.image`
                fish1
            `, SpriteKind.Peaceful_mob)
            animation.runImageAnimation(fish, assets.animation`
                fish_anim
            `, 200, true)
            list_mob22.push(fish)
        }
    }
    
    function create_mob_cap_fish2(list_mob222: Sprite[], how_many_mobs3: number) {
        let fish2: Sprite;
        for (let index3 = 0; index3 < how_many_mobs3; index3++) {
            fish2 = sprites.create(assets.image`
                fish2
            `, SpriteKind.Peaceful_mob)
            animation.runImageAnimation(fish2, assets.animation`
                fish2_anim
            `, 200, true)
            list_mob222.push(fish2)
        }
    }
    
    function create_mob_cap_crab(list_mob2222: Sprite[], how_many_mobs4: number) {
        let crab: Sprite;
        
        for (let index4 = 0; index4 < how_many_mobs4; index4++) {
            crab = sprites.create(assets.image`
                crab
            `, SpriteKind.Crab_mob)
            statusbar = statusbars.create(10, 3, StatusBarKind.Health)
            statusbar.setColor(2, 13)
            statusbar.setStatusBarFlag(StatusBarFlag.SmoothTransition, true)
            statusbar.attachToSprite(crab)
            sprites.setDataNumber(crab, "HP", 1)
            animation.runImageAnimation(crab, assets.animation`
                crab_anim
            `, 200, true)
            list_mob2222.push(crab)
        }
    }
    
    function create_mob_cap_phantom(list_mob34234: Sprite[], how_many_phantom_mobs: number) {
        let phantom: Sprite;
        
        for (let index6 = 0; index6 < how_many_phantom_mobs; index6++) {
            phantom = sprites.create(assets.image`
                skeleton
            `, SpriteKind.Phantom_mob)
            statusbar = statusbars.create(30, 3, StatusBarKind.Health)
            statusbar.setColor(2, 13)
            statusbar.setStatusBarFlag(StatusBarFlag.SmoothTransition, true)
            statusbar.attachToSprite(phantom)
            sprites.setDataNumber(snake, "HP", 5)
            animation.runImageAnimation(phantom, assets.animation`
                    phantom_anim
                `, 200, true)
            list_mob34234.push(phantom)
        }
    }
    
    function create_mob_cap_phantom_boss(list_mob222222: Sprite[], how_many_mobs22: number) {
        let phantom_boss: Sprite;
        
        for (let index7 = 0; index7 < how_many_mobs22; index7++) {
            phantom_boss = sprites.create(assets.image`
                    phantom_boss
                `, SpriteKind.Phantom_boss_mob)
            statusbarboss = statusbars.create(80, 3, StatusBarKind.Health)
            statusbarboss.setColor(2, 13)
            statusbarboss.setStatusBarFlag(StatusBarFlag.SmoothTransition, true)
            statusbarboss.attachToSprite(phantom_boss)
            sprites.setDataNumber(phantom_boss, "HP", 6)
            animation.runImageAnimation(phantom_boss, assets.animation`
                    phantomboss_anim0
                `, 200, true)
            list_mob222222.push(phantom_boss)
        }
    }
    
    //  Función para los mobs creados, spawnerlos en el mapa
    function create_all_mobs() {
        //  Spawn dels "Monster_mob"
        create_mob_cap(list_mobcap_enemyMobs1, 7)
        generate_mobs_in_map(list_mobcap_enemyMobs1, 1350, 1800, 850, 1150)
        create_mob_cap(list_mobcap_enemyMobs2, 5)
        generate_mobs_in_map(list_mobcap_enemyMobs2, 1550, 1800, 200, 550)
        //  Spawn dels "Peaceful_mob"
        //  Big lake
        create_mob_cap_fish2(list_mobcap_fish1, 2)
        generate_mobs_in_map(list_mobcap_fish1, 780, 900, 710, 960)
        create_mob_cap_fish(list_mobcap_fish2, 2)
        generate_mobs_in_map(list_mobcap_fish2, 640, 740, 710, 960)
        create_mob_cap_fish(list_mobcap_fish3, 2)
        generate_mobs_in_map(list_mobcap_fish3, 640, 840, 650, 800)
        create_mob_cap_fish2(list_mobcap_fish4, 2)
        generate_mobs_in_map(list_mobcap_fish4, 540, 640, 740, 850)
        //  Small left lake
        create_mob_cap_fish(list_mobcap_fish5, 2)
        generate_mobs_in_map(list_mobcap_fish5, 75, 125, 1150, 1275)
        create_mob_cap_fish2(list_mobcap_fish6, 2)
        generate_mobs_in_map(list_mobcap_fish6, 75, 125, 1150, 1275)
        //  Small right lake
        create_mob_cap_fish(list_mobcap_fish7, 2)
        generate_mobs_in_map(list_mobcap_fish7, 1660, 1725, 80, 170)
        create_mob_cap_fish2(list_mobcap_fish8, 2)
        generate_mobs_in_map(list_mobcap_fish8, 1660, 1750, 80, 170)
        //  Spawn dels "Crab_mob"
        create_mob_cap_crab(list_mobcap_crab1, 3)
        generate_mobs_in_map(list_mobcap_crab1, 560, 620, 600, 700)
        create_mob_cap_crab(list_mobcap_crab2, 2)
        generate_mobs_in_map(list_mobcap_crab2, 920, 1000, 700, 800)
        create_mob_cap_crab(list_mobcap_crab3, 3)
        generate_mobs_in_map(list_mobcap_crab3, 560, 620, 970, 1020)
        create_mob_cap_crab(list_mobcap_crab4, 2)
        generate_mobs_in_map(list_mobcap_crab4, 820, 900, 1000, 1070)
        //  Spawn dels "Snake_mob"
        create_mob_cap_snake(list_mobcap_snake1, 3)
        generate_mobs_in_map(list_mobcap_snake1, 1100, 1200, 1700, 1800)
        create_mob_cap_snake(list_mobcap_snake2, 2)
        generate_mobs_in_map(list_mobcap_snake2, 1200, 1340, 1460, 1520)
        create_mob_cap_snake(list_mobcap_snake3, 3)
        generate_mobs_in_map(list_mobcap_snake3, 1600, 1780, 1350, 1450)
        //  Spawn dels "Phantom_mob"
        create_mob_cap_phantom(list_mobcap_phantom, 7)
        generate_mobs_in_map(list_mobcap_phantom, 1500, 1850, 1675, 1900)
        //  Spawn del "Phantom_boss"
        create_mob_cap_phantom_boss(list_mobcap_phantomboss, 1)
        generate_mobs_in_map(list_mobcap_phantomboss, 1865, 1865, 1860, 1860)
    }
    
    //  Creación de sprites de casas
    function create_sprites(pos_x: number, pos_y: number): Sprite {
        
        sprite_house1 = sprites.create(img`
                ...........................................................................................
                        ................................eeeeeeeeeeeeeeeeeeeeeeeeeee................................
                        ...............................eeeeeeeeeeeeeeeeeeeeeeeeeeeee...............................
                        ..............................eeeeeeeeeeeeeeeeeeeeeeeeeeeeee...............................
                        ..............................eeeeeeeeeeeeeeeeeeeeeeeeeeeeeee..............................
                        ..............................eeeeeeeeeeeeeeeeeeeeeeeeeeeeeee..............................
                        .............................eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee.............................
                        .............................eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee.............................
                        ............................eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee............................
                        ............................eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee............................
                        ...........................eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee...........................
                        ...........................eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee...........................
                        ..........................eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee..........................
                        ..........................eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee..........................
                        .........................eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee.........................
                        .........................eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee.........................
                        ........................eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee........................
                        ........................eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee........................
                        .......................eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee.......................
                        .......................eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee.......................
                        ....................eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee....................
                        .................eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee.................
                        ..............eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee..............
                        ...........eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee...........
                        .........eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee.........
                        ........eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee........
                        ........eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee........
                        ........eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee........
                        ........eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee........
                        ........eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee........
                        ........eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee........
                        ........eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee........
                        ........eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee........
                        ........eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee........
                        ........eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee........
                        ......eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee......
                        ....eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee....
                        ..eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee..
                        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffffffffffffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffffffffffffffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeecfffffffffffffffffffffffffffceeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffffffffffffcccccffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeecfffffffffffcb6666cfffffffffffceeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffcccccccfcb666666cfcccccccfffeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                        eeeeeeeeeeeeeeeeeeeeeeeeeeeeecfffccccccccc6b66666cccccccccfffceeeeeeeeeeeeeeeeeeeeeeeeeeeee
                        eeeeeeeeeeeeeeeeeeeeeeeeeeeeefffcccccccccc69999b6ccccccccccfffeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                        eeeeeeeeeeeeeeeeeeeeeeeeeeeecfffcccccccccc699999bccccccccccfffceeeeeeeeeeeeeeeeeeeeeeeeeeee
                        eeeeeeeeeeeeeeeeeeeeeeeeeeeefffcccccccccccc69999ccccccccccccfffeeeeeeeeeeeeeeeeeeeeeeeeeeee
                        eeeeeeeeeeeeeeeeeeeeeeeeeeecfffccccccccccccc699cccccccccccccfffceeeeeeeeeeeeeeeeeeeeeeeeeee
                        eeeeeeeeeeeeeeeeeeeeeeeeeeefffcccccccccccccccccccccccccccccccfffeeeeeeeeeeeeeeeeeeeeeeeeeee
                        eeeeeeeeeeeeeeeeeeeeeeeeeecfffcccccccccccccccccccccccccccccccfffceeeeeeeeeeeeeeeeeeeeeeeeee
                        eeeeeeeeeeeeeeeeeeeeeeeeeefffcccccccccccccccccccccccccccccccccfffeeeeeeeeeeeeeeeeeeeeeeeeee
                        eeeeeeeeeeeeeeeeeeeeeeeeecfffcccccccccccccccccccccccccccccccccfffceeeeeeeeeeeeeeeeeeeeeeeee
                        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                        eeeeeeeeeeeeeeeeeeeeeeeeceeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                        eeeeeeeeeeeeeeeeeeeeeccceeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeecceeeeeeeeeeeeeeeeeeeee
                        eeeeeeeeeeeeeeeeeeccceeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeeecceeeeeeeeeeeeeeeeee
                        eeeeeeeeeeeeeeeccebbeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeeebbecceeeeeeeeeeeeeee
                        eeeeeeeeeeeeccebbbbbeeeeebdddddddddddddddddddddddddddddddddddddddbeeeeebbbbbecceeeeeeeeeeee
                        eeeeeeeeeecebbbbbbddeeeeebddddeeeeeeeeeeeebdddddbeeeeeeeeeeeeddddbeeeeeddbbbbbbeceeeeeeeeee
                        eeeeeeeeeebbbbbdddddeebbebdddde6b66b66666bbdddddbb666b666666eddddbebbeedddddbbbbbeeeeeeeeee
                        eeeeeeeeeebbddddddddeebbebddddeb66b666666bbdddddbb6666666666eddddbebbeeddddddddbbeeeeeeeeee
                        eeeeeeeeeebdddddddddeebbebdddde66b6666669bbdddddbb6b6666666deddddbebbeedddddddddbeeeeeeeeee
                        eeeeeeeeeebdddddddddeebbebdddde9999999999bbdddddbb99999999d9eddddbebbeedddddddddbeeeeeeeeee
                        eeeeeeeeeebdddddddddeebbebdddde9999999999bbdddddbb9999999d99eddddbebbeedddddddddbeeeeeeeeee
                        eeeeeeeeeebdddddddddeebbebdddde9999999999bbdddddbb999999d99deddddbebbeedddddddddbeeeeeeeeee
                        eeeeeeeeeebdddddddddeebbebddddebbbbbbbbbbbbdddddbbbbbbbdbbdbeddddbebbeedddddddddbeeeeeeeeee
                        eeeeeeeeeebdddddddddeebbebddddeeeeeeeeeeeebdddddbeeeeeeeeeeeeddddbebbeedddddddddbeeeeeeeeee
                        eeeeeeeeeebdddddddddeebbebdddddddddddddddddddddddddddddddddddddddbebbeedddddddddbeeeeeeeeee
                        ceeeeeeeeebdddddddddeebbebdddddddddddddddddddddddddddddddddddddddbebbeedddddddddbeeeeeeeeec
                        ceeeeeeceebbbbbbbbbbeebbebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbebbeebbbbbbbbbbeeceeeeeec
                        ceeeeeeeeeeeeeeeeeeeebbbeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeebbbeeeeeeeeeeeeeeeeeeeec
                        cccceeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeeeee....
                        ...eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee....
                        ...eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee....
                        ...eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee....
                        ...ccccceeeeeeeeeeeeeeeeeeeeeeeeccccccccccccccccccccccccccceeeeeeeeeeeeeeeeeeeeeeeecccc....
                        ........eeeeeebbbbbbbbbbbbbbbbbecccccccccccccbcccccccccccccebbbbbbbbbbbbbbbbbeeeeee........
                        ........eeeeeebbbbbbbbbbbbbbbbbecccccccccccccbcccccccccccccebbbbbbbbbbbbbbbbbeeeeee........
                        ........eeeeeebbbbbbbbbbbbbbbbbeccecceceececcbcceccecceccecebbbbbbbbbbbbbbbbbeeeeee........
                        ........eeeeeedddddddddddddddddeccecceceececcbcceccecceccecedddddddddddddddddeeeeee........
                        ........eeeeeedddddbbbbbbddddddeccecceceececcbccecceccecceceddddddbbbbbbdddddeeeeee........
                        ........ebbbeedddddbcbbebddddddeccecceceececcbccecceccecceceddddddbebbbbdddddeebbbe........
                        ........ebbbeedddddbb66ebddddddeccecceceececcbccecceccecceceddddddbe66bbdddddeebbbe........
                        ........ebbbeedddddbb66ebddddddeccecceceeccecbcecceeccecceceddddddbe66bbdddddeebbbe........
                        ........ebbbeedddddbbb6ebddddddecceccecebbbbebebbbbeccecceceddddddbeb6bbdddddeebbbe........
                        ........ebbbeedddddbb99ebddddddecceccecebddbcbcbddbeccecceceddddddbe99bbdddddeebbbe........
                        ........ebbbeedddddbb99ebddddddecceccececbbccbccbbceccecceceddddddbe99bbdddddeebbbe........
                        ........ebbbeedddddbb99ebddddddeccecceceeeeecbceeececcecceceddddddbe99bbdddddeebbbe........
                        ........ebbbeedddddbb99ebddddddeccecceceececcbccecceccecceceddddddbb99bbdddddeebbbe........
                        ........eeeeeedddddbeeeebddddddeccecceceececcbccecceccecceceddddddbeeeebdddddeeeeee........
                        ........eeeeeedddddbbbbbdddddddeccecceceececcbcceccecceccecedddddddbbbbbdddddeeeeee........
                        ........eeeeeedddddddddddddddddeccecceceececcbcceccecceccecedddddddddddddddddeeeeee........
                        ........eeeeeebbbbbbbbbbbbbbbbbeccecceceececcbcceccecceccecebbbbbbbbbbbbbbbbbeeeeee........
                        ........eeeeeebbbbbbbbbbbbbbbbbe...........................ebbbbbbbbbbbbbbbbbeeeeee........
                        ........eeeeeeeeeeeeeeeeeeeeeeee...........................eeeeeeeeeeeeeeeeeeeeeeee........
                        ........eeeeec...............................................................ceeeee........
                        ...........................................................................................
            `, SpriteKind.Stuff)
        sprite_house1.setPosition(pos_x, pos_y)
        return sprite_house1
    }
    
    function create_sprites2(posx3: number, posy3: number): Sprite {
        
        sprite_house2 = sprites.create(img`
                ...........................eeeeeeeeeeeeeeeeeeee............................
                        ........................eeeeeeeeeeeeeeeeeeeeeeeeee.........................
                        ......................eeeeeeeeeeeeeeeeeeeeeeeeeeeeee.......................
                        ....................eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee.....................
                        ..................eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee...................
                        ................eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee.................
                        ..............eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeebbbbbbbbbbb...............
                        ............eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeebdddddddddbee.............
                        ..........eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeebdddddddddbeeee...........
                        ........eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeebddbbbbbddbeeeeee.........
                        ......eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeebddbcccbddbeeeeeeee.......
                        ....eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeebddbcccbddbeeeeeeeeee.....
                        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeebddbbbbbddbeeeeeeeeeeeeee.
                        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeebdddddddddbeeeeeeeeeeeeee.
                        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeebdddddddddbeeeeeeeeeeeeee.
                        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeebbbbbbbbbeeeeeeeeeeeeeee.
                        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeebbbbbbbbbeeeeeeeeeeeeeee.
                        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeebbbbbbbbbeceeeeeeeeeeeee.
                        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeebbbbbbbbbecceeeeeeeeeeee.
                        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeebbbbbbbbbeccceeeeeeeeeee.
                        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefeebbbbbbbeffcceeeeeeeeee.
                        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeecffeebbbbbecccfceeeeeeeee.
                        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeccffeebbbeccccffeeeeeeee.
                        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeccccfeebecccccceeeeeeee.
                        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeccccffeecccccceeeeeeee.
                        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeecccccffcccccceeeeeeee.
                        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeccccccffcccceeeeeeee.
                        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeccccccccfcceeeeeeee.
                        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeccccccccffeeeeeeee.
                        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee.
                        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee.
                        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee.
                        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee.
                        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee.
                        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee.
                        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee.
                        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee.
                        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee.
                        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee.
                        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee.
                        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee.
                        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee.
                        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee.
                        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee.
                        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee.
                        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee.
                        eeeeeeeeeeeeeeeeeeeeeeeeeecccccccccccccccccccccceeeeeeeeeeeeeeeeeeeeeeeeee.
                        eeeeeeeeeeeeeeeeeeeeeeeeccffffffffffffffffffffffcceeeeeeeeeeeeeeeeeeeeeeee.
                        eeeeeeeeeeeeeeeeeeeeeeccffffffffffffffffffffffffffcceeeeeeeeeeeeeeeeeeeeee.
                        eeeeeeeeeeeeeeeeeeeeccefffffff669666ff669666fffffffecceeeeeeeeeeeeeeeeeeee.
                        eeeeeeeeeeeeeeeeeecceeefffffff696669ff696669fffffffeeecceeeeeeeeeeeeeeeeee.
                        eeeeeeeeeeeeeeeecceeeeeffccccf9666d9ff9666d9fccccffeeeeecceeeeeeeeeeeeeeee.
                        eeeeeeeeeeeeeecccceeeeeccccccf999d99ff999d99fcccccceeeeecccceeeeeeeeeeeeee.
                        eeeeeeeeeeeecccccceebbeccccccffffffffffffffffccccccebbeecccccceeeeeeeeeeee.
                        eeeeeeeeeeccccccccebbbeccccccccccccccccccccccccccccebbbecccccccceeeeeeeeee.
                        ceeeeeeeccccccccccebbbeccccccccccccccccccccccccccccebbbecccccccccceeeeeeec.
                        ceeeeecceeeeeeeeeeebbbeeeeeeeeeeeeeeeeeeeeeeeeeeeeeebbbeeeeeeeeeeecceeeeec.
                        ceeecceeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeeecceeec.
                        cccceeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeecccc.
                        ...eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee....
                        ...eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee....
                        ......eeeeebbeeeeeeeeeeeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeee.......
                        ......eeeeebbeeeeeeeeeeeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeee.......
                        ......eeeeeddeeeeeeeeeeeeeeeeddddddddddddddddddddddddddddddddddeeeee.......
                        ......eeeeeddeeeeeeeeeeeeeeeeddeeeeeeeeeeeeddddeeeeeeeeeeeeddddeeeee.......
                        ......ebbbeddeeee66eeee66eeeedde6696ee6696edddde6696ee6696eddddebbbe.......
                        ......ebbbeddeee6996ee6996eeedde6966ee6966edddde6966ee6966eddddebbbe.......
                        ......ebbbeddeee6996ee6996eeedde9666ee9666edddde9666ee9666eddddebbbe.......
                        ......ebbbeddeee6996ee69eeeeedde6999ee6999edddde6999ee6999eddddebbbe.......
                        ......ebbbeddeee6996ee6e444eedde999dee999dedddde99ddee99ddeddddebbbe.......
                        ......ebbbeddeee6996ee6e444eedde99d9ee99d9edddeeeeeeeeeeeeeedddebbbe.......
                        ......ebbbeddeee6996ee69eeeeedde9d99ee9d99edddeeeeeeeeeeeeeedddebbbe.......
                        ......ebbbeddeee6996ee6996eeeddeeeeeeeeeeeedddeeeeeeeeeeeeeedddebbbe.......
                        ......ebbbeddeee6996ee6996eeedddddddddddddddddeeeeeeeeeeeeeedddebbbe.......
                        ......ebbbeddeeee66eeee66eeeedddddddddddddddddccccccccccccccdddebbbe.......
                        ......eeeeeddeeeeeeeeeeeeeeeeddddddddddddddddddddddddddddddddddeeeee.......
                        ......eeeeebbeeeeeeeeeeeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeee.......
                        ......eeeeebbeccccccccccccccebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeee.......
                        ......eeeeeeee..............eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee.......
                        ......eeeee....................................................eeeee.......
                        ...........................................................................
            `, SpriteKind.Stuff)
        sprite_house2.setPosition(posx3, posy3)
        return sprite_house2
    }
    
    function create_sprites3(posx2: number, posy2: number): Sprite {
        
        sprite_house3 = sprites.create(img`
                .........................................eeeeeeeeeeeeeeeeee.........................
                        .......................................eeeeeeeeeeeeeeeeeeeeee.......................
                        .....................................eeeeeeeeeeeeeeeeeeeeeeeeee.....................
                        ...................................eeeeeeeeeeeeeeeeeeeeeeeeeeeeee...................
                        .................................eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee.................
                        ...............................eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee...............
                        .............................eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee.............
                        ...........................eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee...........
                        .........................eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee.........
                        .......................eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee.......
                        .....................eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee.....
                        ...................eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee.
                        .................eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee.
                        ...............eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee.
                        .............eebbbbbbbbbbbeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee.
                        ...........eeeebdddddddddbeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee.
                        .........eeeeeebdddddddddbeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee.
                        .......eeeeeeeebddbbbbbddbeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee.
                        .....eeeeeeeeeebddbcccbddbeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee.
                        .eeeeeeeeeeeeeebddbcccbddbeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee.
                        .eeeeeeeeeeeeeebddbbbbbddbeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee.
                        .eeeeeeeeeeeeeebdddddddddbeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee.
                        .eeeeeeeeeeeeeebdddddddddbeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee.
                        .eeeeeeeeeeeeeeebbbbbbbbbeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee.
                        .eeeeeeeeeeeeeeebbbbbbbbbeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee.
                        .eeeeeeeeeeeeeeebbbbbbbbbeeceeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee.
                        .eeeeeeeeeeeeeeebbbbbbbbbecceeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee.
                        .eeeeeeeeeeeeeeebbbbbbbbbeccceeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee.
                        .eeeeeeeeeeeeeeebbbbbbbeecceceeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee.
                        .eeeeeeeeeeeeeeebbbbbeecceeeceeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee.
                        .eeeeeeeeeeeeeeebbbeecceeeeecceeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeebbbbbbbeeeeeeeeeeee.
                        .eeeeeeeeeeeeeeebeecceeeeeecccceeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeebdddddbeeeeeeeeeeee.
                        .eeeeeeeeeeeeeeeecceceeeecccccceeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeebdbbbdbeeeeeeeeeeee.
                        .eeeeeeeeeeeeeecceeeceecccccceeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeebdbcbdbeeeeeeeeeeee.
                        .eeeeeeeeeeeeeeeeeeeccccccceceeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeebdbbbdbeeeeeeeeeeee.
                        .eeeeeeeeeeeeeeeeeecccccceeeceeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeebdddddbeeeeeeeeeeee.
                        .eeeeeeeeeeeeeeeecccccceeeeeccceeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeebbbbbeceeeeeeeeeee.
                        .eeeeeeeeeeeeeeeecccceeeeeecccceeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeebbbbbecceeeeeeeeee.
                        .eeeeeeeeeeeeeeeeececeeeecccccceeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeebbbbbecfceeeeeeeee.
                        .eeeeeeeeeeeeeeeeeeeceecccccceeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeceebbbeccffeeeeeeee.
                        .eeeeeeeeeeeeeeeeeeeccccccceceeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefcceebeccccfeeeeeee.
                        .eeeeeeeeeeeeeeeeeecccccceeeceeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffcceeccccceeeeeee.
                        .eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeecffccccccceeeeeee.
                        .eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeccffccccceeeeeee.
                        .eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeccccfccceeeeeee.
                        .eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeecccccccccccccceeeeeeeeeeeeccccffceeeeeee.
                        .eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeccffffffffffffffcceeeeeeeeeeeeeeeeeeeeeeee.
                        .eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeccffffffffffffffffffcceeeeeeeeeeeeeeeeeeeeee.
                        .eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeecceeffffffffffffffffffeecceeeeeeeeeeeeeeeeeeee.
                        .eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeecceeeeffffffffffffffffffeeeecceeeeeeeeeeeeeeeeee.
                        .eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeccfeeeeeffccccccccccccccffeeeeefcceeeeeeeeeeeeeeee.
                        .eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeccfffeebbeccccccccccccccccccebbeefffcceeeeeeeeeeeeee.
                        .eeeeeeeeeeeeeeeeeeeeeeeeeeeeccfffccebbbeccccccccccccccccccebbbeccfffcceeeeeeeeeeee.
                        .eeeeeeeeeeeeeeeeeeeeeeeeeeccfffccccebbbeccccccccccccccccccebbbeccccfffcceeeeeeeeee.
                        .eeeeeeeeeeeeeeeeeeeeeeeeccfffccccccebbbeccccccccccccccccccebbbeccccccfffcceeeeeeee.
                        .eeeeeeeeeeeeeeeeeeeeeecceeeeeeeeeeeebbbeeeeeeeeeeeeeeeeeeeebbbeeeeeeeeeeeecceeeeec.
                        .eeeeeeeeeeeeeeeeeeeeccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeeecceeec.
                        .eeeeeeeeeeeeeeeeeecceeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeecccc.
                        .eeeeeeeeeeeeeeeecceeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee....
                        .eeeeeeeeeeeeeecceeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee....
                        .eeeeeeeeeeeeccbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeeeeeeeeeeeeeebbbbbbbbbbbbbeeeee.......
                        .eeeeeeeeeeccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeeeeeeeeeeeeeebbbbbbbbbbbbbeeeee.......
                        .ceeeeeeeccddddddddddddddddddddddddddddddddeeeeeeeeeeeeeeeedddddddddddddeeeee.......
                        .ceeeeeccdddddeeeeddeeeeddddddeeeeddeeeedddeeeeeeeeeeeeeeeedddddeeedddddeeeee.......
                        .ceeeccbedddde6696ee6696edddde6696ee6696eddeeeeeeeeeeeeeeeedddde669eddddebbbe.......
                        .ccccbbbedddde6966ee6966edddde6966ee6966eddeeeeeeeeeeeeeeeedddde696eddddebbbe.......
                        ....ebbbedddde9666ee9666edddde9666ee9666eddeeeeeeeeeeeeeeeedddde966eddddebbbe.......
                        ....ebbbedddde6999ee6999edddde6999ee6999eddeeeeeeeeeeeeeeeedddde699eddddebbbe.......
                        ....ebbbedddde99ddee99ddedddde9999ee9999eddeeeeeeeeeee444eedddde999eddddebbbe.......
                        ....ebbbedddeeeeeeeeeeeeeeddde999dee999deddeeeeeeeeeee444eedddde999eddddebbbe.......
                        ....ebbbedddeeeeeeeeeeeeeeddde99d9ee99d9eddeeeeeeeeeeeeeeeedddde99deddddebbbe.......
                        ....ebbbedddeeeeeeeeeeeeeeddde9d99ee9d99eddeeeeeeeeeeeeeeeedddde9d9eddddebbbe.......
                        ....ebbbedddeeeeeeeeeeeeeeddddeeeeddeeeedddeeeeeeeeeeeeeeeedddddeeedddddebbbe.......
                        ....ebbbedddccccccccccccccdddddddddddddddddeeeeeeeeeeeeeeeedddddddddddddebbbe.......
                        ....eeeeeddddddddddddddddddddddddddddddddddeeeeeeeeeeeeeeeedddddddddddddeeeee.......
                        ....eeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeeeeeeeeeeeeeebbbbbbbbbbbbbeeeee.......
                        ....eeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeccccccccccccccebbbbbbbbbbbbbeeeee.......
                        ....eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee..............eeeeeeeeeeeeeeeeeee.......
                        ....eeeee...............................................................eeeee.......
                        ....................................................................................
                        ....................................................................................
            `, SpriteKind.Stuff)
        sprite_house3.setPosition(posx2, posy2)
        return sprite_house3
    }
    
    function create_sprites4(posx4: number, posy4: number): Sprite {
        
        sprite_house4 = sprites.create(img`
                ................................................................................................................
                        ............................eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee..........................
                        ..........................eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee........................
                        ........................eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee......................
                        ......................eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee....................
                        ....................eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee..................
                        ..................eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee................
                        ................eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee..............
                        ..............eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee............
                        ............eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee..........
                        ..........eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee........
                        ........eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeebbbbbbbeeeee......
                        ......eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeebdddddbeeeeeee....
                        ....eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeebdbbbdbeeeeeeeccc.
                        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeebdbcbdbeeeeeeeeec.
                        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeebdbbbdbeeeeeeeeec.
                        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeebdddddbeeeeeeeeec.
                        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeebbbbbeceeeeeeeec.
                        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeebbbbbecceeeeeeec.
                        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeebbbbbecfceeeeeec.
                        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeceebbbeccffeeeeec.
                        eeeeeebbbbbbbbbbbeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefcceebeccccfeeeec.
                        eeeeeebdddddddddbeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffcceeccccceeeec.
                        eeeeeebdddddddddbeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeecffccccccceeeec.
                        eeeeeebddbbbbbddbeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeccffccccceeeec.
                        eeeeeebddbcccbddbeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeccccfccceeeec.
                        eeeeeebddbcccbddbeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeccccffceeeec.
                        eeeeeebddbbbbbddbeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeec.
                        eeeeeebdddddddddbeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeec.
                        eeeeeebdddddddddbeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeec.
                        eeeeeeebbbbbbbbbeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeec.
                        eeeeeeebbbbbbbbbeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeec.
                        eeeeeeebbbbbbbbbeeceeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeec.
                        eeeeeeebbbbbbbbbecceeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeec.
                        eeeeeeebbbbbbbbbeccceeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeec.
                        eeeeeeebbbbbbbeecceceeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeec.
                        eeeeeeebbbbbeecceeeceeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeec.
                        eeeeeeebbbeecceeeeecceeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeec.
                        eeeeeeebeecceeeeeecccceeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeec.
                        eeeeeeeecceceeeecccccceeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeec.
                        eeeeeecceeeceecccccceeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeec.
                        eeeeeeeeeeeccccccceceeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeec.
                        eeeeeeeeeecccccceeeceeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeec.
                        eeeeeeeecccccceeeeeccceeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeec.
                        eeeeeeeecccceeeeeecccceeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeec.
                        eeeeeeeeececeeeecccccceeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeec.
                        eeeeeeeeeeeceecccccceeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeec.
                        eeeeeeeeeeeccccccceceeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeec.
                        eeeeeeeeeecccccceeeceeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeec.
                        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeec.
                        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeec.
                        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeec.
                        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeceeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeec.
                        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeceeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeec.
                        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeceeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeec.
                        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeecccccccccccccccccccccccccccccccccccccccccccccccccc.
                        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeceeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee....
                        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeceeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee....
                        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeecbbeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeee.........
                        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeebbbbbbbeeeeeeeeeeecbbeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeee.........
                        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeebdddddbeeeeeeeeeeecddeeeeedddddddddddddddddddddddddddddeeeee.........
                        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeebdbbbdbeeeeeeeeeeecddeeeeeddddddddddeeeeeeeeeeeeeeeedddeeeee.........
                        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeebdbcbdbeeeeeeeeeeecddebbbeddeeeeeeddeeeeeeeeeeeeeeeedddebbbe.........
                        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeebdbbbdbeeeeeeeeeeecddebbbedde6966eddeeeeeeeeeeeeeeeedddebbbe.........
                        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeebdddddbeeeeeeeeeeecddebbbedde9666eddeeeeeeeeeeeeeeeedddebbbe.........
                        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeebbbbbeceeeeeeeeeecddebbbedde9999eddeeeeeeeeeeeeeeeedddebbbe.........
                        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeebbbbbecceeeeeeeeecddebbbedde999deddeeeeeeeeeeeeeeeedddebbbe.........
                        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeebbbbbecfceeeeeeeecddebbbedde99d9eddeeeeeeeeeeeeeeeedddebbbe.........
                        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeceebbbeccffeeeeeeecddebbbedde9d99eddee44eeeeeeeeeeeedddebbbe.........
                        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefcceebeccccfeeeeeecddebbbeddeeeeeeddeeeeeeeeeeeeeeeedddebbbe.........
                        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffcceeccccceeeeeecddebbbeddddddddddeeeeeeeeeeeeeeeedddebbbe.........
                        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeecffccccccceeeeeecddebbbeddddddddddeeeeeeeeeeeeeeeedddebbbe.........
                        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeccffccccceeeeeecddeeeeeddddddddddeeeeeeeeeeeeeeeedddeeeee.........
                        eeeeeeeeeeeeeeeeeeeeeeeeeeeeccccceeeeeeeeeeeeeeccccfccceeeeeecbbeeeeebbbbbbbbbbeeeeeeeeeeeeeeeebbbeeeee.........
                        eeeeeeeeeeeeeeeeeeeeeeeeeeccfffffccceeeeeeeeeeeeccccffceeeeeecbbeeeeebbbbbbbbbbeccccccccccccccebbbeeeee.........
                        eeeeeeeeeeeeeeeeeeeeeeeeccffffffffffcceeeeeeeeeeeeeeeeeeeeeeeceeeeeeeeeeeeeeeeee..............eeeeeeeee.........
                        eeeeeeeeeeeeeeeeeeeeeeccffffffffffffffcceeeeeeeeeeeeeeeeeeeeec..eeeee.............................eeeee.........
                        eeeeeeeeeeeeeeeeeeeecceffffffffffffffffecceeeeeeeeeeeeeeeeeeec..................................................
                        eeeeeeeeeeeeeeeeeecceeeffffffffffffffffeeecceeeeeeeeeeeeeeeeec..................................................
                        eeeeeeeeeeeeeeeecceeeeeffffccccccccffffeeeeecceeeeeeeeeeeeeeec..................................................
                        eeeeeeeeeeeeeeccffeeeeeffccccccccccccffeeeeeffcceeeeeeeeeeeeec..................................................
                        eeeeeeeeeeeeccffffeebbeccccccccccccccccebbeeffffcceeeeeeeeeeec..................................................
                        eeeeeeeeeeccffffffebbbeccccccccccccccccebbbeffffffcceeeeeeeeec..................................................
                        ceeeeeeeccffffffccebbbeccccccccccccccccebbbeccffffffcceeeeeeec..................................................
                        ceeeeeccffffffccccebbbeccccccccccccccccebbbeccccffffffcceeeeec..................................................
                        ceeecceeeeeeeeeeeeebbbeeeeeeeeeeeeeeeeeebbbeeeeeeeeeeeeecceeec..................................................
                        cccceeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeeeecccc..................................................
                        ...eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee.....................................................
                        ...eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee.....................................................
                        ...eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee.....................................................
                        .......eeeeebbbeeeeeeeeeeeeeeeebbbbbbbbbbbbbbbbbbbeeeee.........................................................
                        .......eeeeebbbeeeeeeeeeeeeeeeebbbbbbbbbbbbbbbbbbbeeeee.........................................................
                        .......eeeeedddeeeeeeeeeeeeeeeedddddddddddddddddddeeeee.........................................................
                        .......eeeeedddeeeeeeeeeeeeeeeedddeeeeeeeeeeedddddeeeee.........................................................
                        .......ebbbedddeeeeeeeeeeeeeeeeddde669666666edddddebbbe.........................................................
                        .......ebbbedddeeeeeeeeeeeeeeeeddde696696666edddddebbbe.........................................................
                        .......ebbbedddeeeeeeeeeeeeeeeeddde966966666edddddebbbe.........................................................
                        .......ebbbedddeeeeeeeeeee444eedddeeeeeeeeeeedddddebbbe.........................................................
                        .......ebbbedddeeeeeeeeeee444eeddde999999999edddddebbbe.........................................................
                        .......ebbbedddeeeeeeeeeeeeeeeeddde99999999dedddddebbbe.........................................................
                        .......ebbbedddeeeeeeeeeeeeeeeeddde9999d99d9edddddebbbe.........................................................
                        .......ebbbedddeeeeeeeeeeeeeeeeddde999d99d99edddddebbbe.........................................................
                        .......ebbbedddeeeeeeeeeeeeeeeedddeeeeeeeeeeedddddebbbe.........................................................
                        .......ebbbedddeeeeeeeeeeeeeeeedddddddddddddddddddebbbe.........................................................
                        .......eeeeedddeeeeeeeeeeeeeeeedddddddddddddddddddeeeee.........................................................
                        .......eeeeebbbeceeeeeeeeeeeeeebbbbbbbbbbbbbbbbbbbeeeee.........................................................
                        .......eeeeebbbeccccccccccccccebbbbbbbbbbbbbbbbbbbeeeee.........................................................
                        .......eeeeeeeee..............eeeeeeeeeeeeeeeeeeeeeeeee.........................................................
                        .......eeeee......................................eeeee.........................................................
                        ................................................................................................................
                        ................................................................................................................
                        ................................................................................................................
            `, SpriteKind.Stuff)
        sprite_house4.setPosition(posx4, posy4)
        return sprite_house4
    }
    
    //  Destruir todos los sprites
    function destroy_all_sprites() {
        sprites.destroyAllSpritesOfKind(SpriteKind.NPC)
        sprites.destroyAllSpritesOfKind(SpriteKind.Stuff)
        sprites.destroyAllSpritesOfKind(SpriteKind.Citizen1)
        sprites.destroyAllSpritesOfKind(SpriteKind.Citizen2)
        sprites.destroyAllSpritesOfKind(SpriteKind.Citizen3)
        sprites.destroyAllSpritesOfKind(SpriteKind.Mayor1)
        sprites.destroyAllSpritesOfKind(SpriteKind.Mayor2)
        sprites.destroyAllSpritesOfKind(SpriteKind.Peaceful_mob)
        sprites.destroyAllSpritesOfKind(SpriteKind.Monster_mob)
        sprites.destroyAllSpritesOfKind(SpriteKind.Snake_mob)
        sprites.destroyAllSpritesOfKind(SpriteKind.Crab_mob)
        sprites.destroyAllSpritesOfKind(SpriteKind.Phantom_mob)
        sprites.destroyAllSpritesOfKind(SpriteKind.Peaceful_mob)
    }
    
    //  Función para crear los edificios del pueblo grande
    function town_buildings_2() {
        //  Town 2
        create_sprites3(250, 1672)
        create_sprites3(520, 1560)
        create_sprites3(620, 1560)
        create_sprites(400, 1653)
        create_sprites2(520, 1672)
        create_sprites2(600, 1672)
        create_sprites2(680, 1672)
        create_sprites4(568, 1417)
        create_sprites4(175, 1450)
    }
    
    //  Función para crear los edificios del pueblo pequeño
    function town_buildings_1() {
        //  Town 1
        create_sprites(1290, 100)
        create_sprites2(1390, 120)
        create_sprites3(1180, 120)
        create_sprites4(1500, 105)
    }
    
    //  Función para colocar los mobs generados
    function generate_mobs_in_map(list_mob2: Sprite[], x1: number, x2: number, y1: number, y2: number) {
        let x_pos_mob1: number;
        let y_pos_mob1: number;
        for (let mob of list_mob2) {
            x_pos_mob1 = randint(x1, x2)
            y_pos_mob1 = randint(y1, y2)
            mob.setPosition(x_pos_mob1, y_pos_mob1)
        }
    }
    
    //  Dirección de donde mira el jugador cambiar dirección del proyectil
    controller.A.onEvent(ControllerButtonEvent.Pressed, function on_a_pressed() {
        
        if (direction == 1) {
            projectile = sprites.createProjectileFromSprite(assets.image`
                arrow
            `, mySprite, -150, 0)
        } else if (direction == 2) {
            projectile = sprites.createProjectileFromSprite(assets.image`
                arrow0
            `, mySprite, 150, 0)
        } else if (direction == 3) {
            projectile = sprites.createProjectileFromSprite(assets.image`
                arrow1
            `, mySprite, 0, -150)
        } else if (direction == 4) {
            projectile = sprites.createProjectileFromSprite(assets.image`
                arrow2
            `, mySprite, 0, 150)
        } else {
            
        }
        
    })
    controller.up.onEvent(ControllerButtonEvent.Pressed, function on_up_pressed() {
        
        direction = 3
        animation.runImageAnimation(mySprite, assets.animation`
            myAnim4
        `, 200, true)
    })
    controller.left.onEvent(ControllerButtonEvent.Pressed, function on_left_pressed() {
        
        direction = 1
        animation.runImageAnimation(mySprite, assets.animation`
            myAnim3
        `, 200, true)
    })
    controller.right.onEvent(ControllerButtonEvent.Pressed, function on_right_pressed() {
        
        direction = 2
        animation.runImageAnimation(mySprite, assets.animation`
            myAnim2
        `, 200, true)
    })
    controller.down.onEvent(ControllerButtonEvent.Pressed, function on_down_pressed() {
        
        direction = 4
        animation.runImageAnimation(mySprite, assets.animation`
            myAnim
        `, 200, true)
    })
    //  Función recursiva para ver el número más pequeño dentro de una lista
    function find_min(my_list: number[]): number {
        if (my_list.length == 0) {
            return null
        }
        
        if (my_list.length == 1) {
            return my_list[0]
        }
        
        let temp = my_list[0] < my_list[1] ? my_list[0] : my_list[1]
        my_list[1] = temp
        return find_min(my_list.slice(1))
    }
    
    //  Al tocar el mago empieza dialogo
    scene.onOverlapTile(SpriteKind.Player, sprites.swamp.swampTile16, function on_overlap_tile(sprite422: Sprite, location32: tiles.Location) {
        
        if (conversation_done == false) {
            keep_asking = true
            game.splash("\"Hola\"")
            game.splash("\"Gràcies per venir\"")
            game.splash("\"T'hem cridat ja que tenim uns quants problemes en els pobles\"")
            game.splash("\"Ens ajudaràs?\"")
            while (keep_asking == true) {
                user_option = game.askForString("")
                if (user_option == "SI" || user_option == "si") {
                    game.splash("\"Gràcies per voler ajudar-nos\"")
                    keep_asking = false
                } else if (user_option == "NO" || user_option == "no") {
                    game.splash("\"El 'NO', no era una opció\"")
                    game.splash("\"Et segueixo explicant\"")
                    keep_asking = false
                } else {
                    game.splash("\"No t'he entès\"")
                    game.splash("\"Torna'm a dir-ho però més clar\"")
                }
                
            }
            game.splash("\"Per resoldre aquestes missions, hauràs d'anar a cada poble a preguntar als seus habitants \"")
            game.splash("\"... \"")
            game.splash("\"S'hem oblida alguna cosa ... \"")
            game.splash("\"JA SÈ! IMPORTANT ! \"")
            game.splash("\"Per cada missió que completis tindràs un recompensa,\"")
            game.splash("\"així que no t'oblidis de buscar-me\"")
            game.splash("\"Com a últim punt, per anar cap a la zona dels pobles, has d'anar abaix a la dreta del mapa i agafar el teletransportador\"")
        }
        
        conversation_done = true
    })
    //  Cuando el jugador toca al alcalde del pueblo grande
    sprites.onOverlap(SpriteKind.Player, SpriteKind.Mayor1, function on_on_overlap4(sprite: Sprite, otherSprite: Sprite) {
        let reward: string;
        
        if (conversation_done5 == false) {
            game.splash("\"Si has ajudat al altre alcalde, junt amb aquesta clau podrás entrar a la casa abandonada\"")
            game.splash("\"Hey Max! Gràcies per venir, tenim un gran problema.\"")
            game.splash("\"La casa més gran porta anys abandonada, però últimament, sentim sorolls extranys al soterrani.\"")
            game.splash("\"Hi ha històries que diuen que pot ser l'entrada d'una antiga masmorra.\"")
            game.splash("\"Ves i descobreix què està passant.\"")
            reward = "'Mitja Clau Pt2 [Casa Encantada]'"
            inventory.push(reward)
            game.showLongText("Has aconseguit :" + reward, DialogLayout.Bottom)
        }
        
        conversation_done5 = true
    })
    //  Cuando el jugador toca al alcalde del pueblo pequeño
    sprites.onOverlap(SpriteKind.Player, SpriteKind.Mayor2, function on_on_overlap11(sprite43: Sprite, otherSprite34: Sprite) {
        
        if (conversation_done5 == false) {
            game.splash("\"Max, la situació és crítica. Monstres al voltant del llac (segint el camí cap a la dreta) impedeixen pescar i tallar fusta.\"")
            game.splash("\"Sense menjar ni llenya, l'hivern serà dur.\"")
            game.splash("\"Ves al llac, elimina els monstres i assegura la supervivència de Johto.\"")
            game.splash("\"Confiem en tu, Max!\"")
            game.showLongText("Has aconseguit la missió 'Mata als monstres del bosc', un cop finalitzada rebrás una recompensa", DialogLayout.Bottom)
        }
        
        conversation_done5 = true
    })
    //  Cuando el jugador choca con enemigos
    sprites.onOverlap(SpriteKind.Player, SpriteKind.Phantom_mob, function on_on_overlap(sprite9: Sprite, otherSprite62: Sprite) {
        info.changeLifeBy(-1)
        scene.cameraShake(4, 200)
        sprites.destroy(otherSprite62, effects.ashes, 350)
        otherSprite62.destroy()
        music.thump.play()
    })
    sprites.onOverlap(SpriteKind.Player, SpriteKind.Monster_mob, function on_on_overlap2(sprite3: Sprite, otherSprite2: Sprite) {
        info.changeLifeBy(-1)
        scene.cameraShake(4, 200)
        sprites.destroy(otherSprite2, effects.ashes, 350)
        otherSprite2.destroy()
        music.thump.play()
    })
    sprites.onOverlap(SpriteKind.Player, SpriteKind.Crab_mob, function on_on_overlap13(sprite6: Sprite, otherSprite322: Sprite) {
        info.changeLifeBy(-1)
        scene.cameraShake(4, 200)
        sprites.destroy(otherSprite322, effects.ashes, 350)
        otherSprite322.destroy()
        music.thump.play()
    })
    sprites.onOverlap(SpriteKind.Player, SpriteKind.Phantom_boss_mob, function on_on_overlap20(sprite6: Sprite, otherSprite322: Sprite) {
        timer.throttle("action", 500, function on_throttle2() {
            info.changeLifeBy(-2)
            scene.cameraShake(4, 200)
            music.thump.play()
        })
    })
    sprites.onOverlap(SpriteKind.Player, SpriteKind.Snake_mob, function on_on_overlap6(sprite25: Sprite, otherSprite63: Sprite) {
        info.changeLifeBy(-2)
        scene.cameraShake(4, 200)
        sprites.destroy(otherSprite63, effects.ashes, 350)
        otherSprite63.destroy()
        music.thump.play()
    })
    //  Cuando el jugador lanza una fecha y toca al enemigo
    sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Crab_mob, function on_on_overlap7(sprite8: Sprite, otherSprite5: Sprite) {
        let crab_killed: number;
        sprites.destroy(sprite8)
        statusbars.getStatusBarAttachedTo(StatusBarKind.Health, otherSprite5).value += -30
        sprites.changeDataNumberBy(otherSprite5, "HP", -1)
        if (sprites.readDataNumber(otherSprite5, "HP") <= 0) {
            sprites.destroy(otherSprite5)
            crab_killed = 1
            count_kills(enemymobs_killed, "crab", 1)
        }
        
    })
    sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Snake_mob, function on_on_overlap15(sprite242: Sprite, otherSprite32: Sprite) {
        let snake_killed: number;
        sprites.destroy(sprite242)
        statusbars.getStatusBarAttachedTo(StatusBarKind.Health, otherSprite32).value += -30
        sprites.changeDataNumberBy(otherSprite32, "HP", -1)
        if (sprites.readDataNumber(otherSprite32, "HP") <= 0) {
            sprites.destroy(otherSprite32)
            snake_killed = 1
            count_kills(enemymobs_killed, "snake", 1)
        }
        
    })
    sprites.onOverlap(SpriteKind.enemie_projectile, SpriteKind.Player, function on_on_overlap20(sprite2424: Sprite, otherSprite324: Sprite) {
        sprites.destroy(sprite2424)
        info.changeLifeBy(-1)
    })
    function on_on_overlap8(sprite23: Sprite, otherSprite33: Sprite) {
        let monster_killed2: any;
        let quest_list_monsters_killed2: any;
        sprites.destroy(sprite23)
        statusbars.getStatusBarAttachedTo(StatusBarKind.Health, otherSprite33).value += -30
        sprites.changeDataNumberBy(otherSprite33, "HP", -1)
        if (sprites.readDataNumber(otherSprite33, "HP") <= 0) {
            sprites.destroy(otherSprite33)
            monster_killed2 = monster_killed2 + 1
            count_kills(enemymobs_killed, "monster", 1)
            if (conversation_done5) {
                quest_list_monsters_killed2 = quest_list_monsters_killed2 + 1
            }
            
        }
        
    }
    
    sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Monster_mob, on_on_overlap8)
    sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Phantom_mob, function on_on_overlap3(sprite7: Sprite, otherSprite4: Sprite) {
        let phantom_killed: number;
        sprites.destroy(sprite7)
        statusbars.getStatusBarAttachedTo(StatusBarKind.Health, otherSprite4).value += -30
        sprites.changeDataNumberBy(otherSprite4, "HP", -1)
        if (sprites.readDataNumber(otherSprite4, "HP") <= 0) {
            sprites.destroy(otherSprite4)
            phantom_killed = 1
            count_kills(enemymobs_killed, "phantom", 1)
        }
        
    })
    function on_on_overlap_phantomboss(sprite2365: any, boss: any) {
        let boss_destroyed: boolean;
        let quest_list_monsters_killed2: any;
        sprites.destroy(sprite2365)
        statusbars.getStatusBarAttachedTo(StatusBarKind.Health, boss).value = -10
        sprites.changeDataNumberBy(boss, "HP", -1)
        if (sprites.readDataNumber(boss, "HP") <= 0) {
            boss_destroyed = true
            game.showLongText("Has derrotat al Boss final", DialogLayout.Bottom)
            game.splash("Felicitats, has derrotat el mal")
            sprites.destroy(boss)
            if (conversation_done5) {
                quest_list_monsters_killed2 = quest_list_monsters_killed2 + 1
            }
            
        }
        
    }
    
    sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Phantom_boss_mob, on_on_overlap8)
    sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function on_on_overlap12(sprite4222: Sprite, otherSprite222: Sprite) {
        sprites.destroy(sprite4222)
        statusbars.getStatusBarAttachedTo(StatusBarKind.Health, otherSprite222).value += -30
        sprites.changeDataNumberBy(otherSprite222, "HP", -1)
        if (sprites.readDataNumber(otherSprite222, "HP") <= 0) {
            sprites.destroy(otherSprite222)
        }
        
    })
    //  Cuando el jugador toca el teletransporte del mapa incial
    scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.collectibleInsignia, function on_overlap_tile5(sprite222: Sprite, location22: tiles.Location) {
        let splash_done: boolean;
        if (conversation_done != true) {
            splash_done = false
            if (splash_done == false) {
                timer.throttle("action", 2000, function on_throttle2() {
                    game.showLongText(warning_text, DialogLayout.Bottom)
                })
            } else {
                game.splash("asd")
            }
            
            splash_done = true
        } else {
            sprites.destroy(NPC_master)
            tiles.setCurrentTilemap(tilemap`
                level3
            `)
            tiles.placeOnTile(sprite222, tiles.getTileLocation(4, 4))
            town_buildings_1()
            town_buildings_2()
            create_all_NPCs()
            create_all_mobs()
        }
        
    })
    //  Cuando el jugador toca la puerta de la casa abandonada
    scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.stairLadder, function on_overlap_tile2(sprite22: Sprite, location2: tiles.Location) {
        tiles.setCurrentTilemap(tilemap`
            passage
        `)
        destroy_all_sprites()
        tiles.placeOnTile(mySprite, tiles.getTileLocation(2, 3))
        scene.cameraFollowSprite(sprite22)
    })
    //  Cuando el jugador toca la entrada de la cueva
    scene.onOverlapTile(SpriteKind.Player, sprites.builtin.forestTiles14, function on_overlap_tile3(sprite223: Sprite, location23: tiles.Location) {
        tiles.setCurrentTilemap(tilemap`
            lava_underground
        `)
        destroy_all_sprites()
        tiles.placeOnTile(mySprite, tiles.getTileLocation(8, 4))
        scene.cameraFollowSprite(sprite223)
    })
    //  Cuando el jugador toca las escaleras de salida de la cueva
    scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.stairWest, function on_overlap_tile_lava_cave(sprite223: Sprite, location23: tiles.Location) {
        tiles.setCurrentTilemap(tilemap`
            level3
        `)
        destroy_all_sprites()
        tiles.placeOnTile(mySprite, tiles.getTileLocation(8, 4))
        mySprite.setPosition(1465, 668)
        create_all_NPCs()
        create_all_mobs()
        town_buildings_2()
        town_buildings_1()
        scene.cameraFollowSprite(sprite223)
    })
    //  Cuando el jugador toca la escalera para entrar a la mazmorra desde el pasillo secreto
    scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.stairNorth, function on_overlap_tile6(sprite24: Sprite, location: tiles.Location) {
        tiles.setCurrentTilemap(tilemap`
            level3
        `)
        tiles.placeOnTile(sprite24, tiles.getTileLocation(1600, 1600))
        mySprite.setPosition(1480, 1660)
        scene.cameraFollowSprite(sprite24)
        create_mob_cap_phantom(list_mobcap_phantom, 8)
        generate_mobs_in_map(list_mobcap_phantom, 1500, 1850, 1675, 1900)
        create_mob_cap_phantom_boss(list_mobcap_phantomboss, 1)
        generate_mobs_in_map(list_mobcap_phantomboss, 1865, 1865, 1860, 1860)
    })
    //  Cuando el jugador toca las escaleras de salida del pasillo secreto
    scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.stairSouth, function on_overlap_tile8(sprite12: Sprite, location5: tiles.Location) {
        tiles.setCurrentTilemap(tilemap`
            level3
        `)
        tiles.placeOnTile(sprite12, tiles.getTileLocation(1600, 300))
        mySprite.setPosition(413, 1733)
        create_all_mobs()
        create_all_NPCs()
        town_buildings_1()
        town_buildings_2()
        scene.cameraFollowSprite(sprite12)
    })
    //  Cuando el jugador toca las escaleras de la mazmorra para volver al pasillo secreto
    scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.stairLarge, function on_overlap_tile9(sprite11: Sprite, location4: tiles.Location) {
        tiles.setCurrentTilemap(tilemap`
            passage
        `)
        tiles.placeOnTile(sprite11, tiles.getTileLocation(2, 12))
        scene.cameraFollowSprite(sprite11)
        sprites.destroyAllSpritesOfKind(SpriteKind.Phantom_mob)
        sprites.destroyAllSpritesOfKind(SpriteKind.Phantom_boss_mob)
    })
    //  Cuando el jugador toca un habitante de tartaria
    sprites.onOverlap(SpriteKind.Player, SpriteKind.Citizen1, function on_on_overlap5(sprite42: Sprite, otherSprite22: Sprite) {
        
        if (conversation_done5 == false) {
            game.splash("\"Si vols anar cap al poble (Johto\"), segueix cap a dalt\"")
            game.splash("\"Ves amb compte quan agafis al camí cap abaix\"")
            game.splash("\"Hi han uns crancs molt agresius\"")
        }
        
        conversation_done5 = true
    })
    //  Cuando el jugador toca un habitante de tartaria
    sprites.onOverlap(SpriteKind.Player, SpriteKind.Citizen3, function on_on_overlap14(sprite4: Sprite, otherSprite6: Sprite) {
        
        if (conversation_done7 == false) {
            game.splash("\"Hola Max!\"")
            game.splash("\"Aquí devant tens la cova, ves amb compte si entres\"")
            game.splash("\"També tens aquí darrere meu un gran bosc frondós\"")
            game.splash("\"Ves amb compte, fa temps van aperèixer monstres extranys!\"")
        }
        
        conversation_done7 = true
    })
    //  Cuando el jugador toca un habitante de tartaria
    sprites.onOverlap(SpriteKind.Player, SpriteKind.Citizen2, function on_on_overlap10(sprite2: Sprite, otherSprite3: Sprite) {
        
        if (conversation_done6 == false) {
            game.splash("\"Puff, cada cop hi han més perills\"")
            game.splash("\"Per sort, aquesta zona es tranquila\"")
            game.splash("\"La zona més perillosa es sens dubte al Est\"")
        }
        
        conversation_done6 = true
    })
    //  Contar los mobs muertos
    function count_kills(enemymobs_killed2: number[], type_mob: string, value: number) {
        if (type_mob == "monster") {
            enemymobs_killed2[0] += value
        }
        
        if (type_mob == "crab") {
            enemymobs_killed2[1] += value
        }
        
        if (type_mob == "snake") {
            enemymobs_killed2[2] += value
        }
        
        if (type_mob == "phantom") {
            enemymobs_killed2[3] += value
        }
        
    }
    
    //  Cuando el jugador toca cofres
    scene.onOverlapTile(SpriteKind.Player, assets.tile`
            dungeon_chest
        `, function on_overlap_tile4(sprite10: Sprite, location3: tiles.Location) {
        timer.throttle("action", 1000, function on_throttle() {
            
            a = randint(0, 6)
            if (chest_1_open == false) {
                chest_reward(a)
            } else {
                game.showLongText("El cofre estava buit ", DialogLayout.Bottom)
            }
            
            chest_1_open = true
        })
    })
    scene.onOverlapTile(SpriteKind.Player, assets.tile`
            dungeon_chest2
        `, function on_overlap_tile7(sprite103: Sprite, location34: tiles.Location) {
        timer.throttle("action", 1000, function on_throttle3() {
            
            a = randint(0, 6)
            if (chest_3_open == false) {
                chest_reward(a)
            } else {
                game.showLongText("El cofre estava buit ", DialogLayout.Bottom)
            }
            
            chest_3_open = true
        })
    })
    scene.onOverlapTile(SpriteKind.Player, assets.tile`
            dungeon_chest1
        `, function on_overlap_tile10(sprite102: Sprite, location33: tiles.Location) {
        timer.throttle("action", 1000, function on_throttle4() {
            
            a = randint(0, 6)
            if (chest_2_open == false) {
                chest_reward(a)
            } else {
                game.showLongText("Ja has obert aquest cofre ", DialogLayout.Bottom)
            }
            
            chest_2_open = true
        })
    })
    scene.onOverlapTile(SpriteKind.Player, assets.tile`
            myTile0
        `, function on_overlap_tile_chest_lava(sprite102: Sprite, location33: tiles.Location) {
        timer.throttle("action", 1000, function on_throttle4() {
            
            a = randint(0, 6)
            if (chest_lava_open == false) {
                chest_reward(a)
            } else {
                game.showLongText("Ja has obert aquest cofre ", DialogLayout.Bottom)
            }
            
            chest_lava_open = true
        })
    })
    //  Función para dar el contenido de los cofreas
    function chest_reward(a: number) {
        let reward222: string;
        let speedy222: number;
        let speedx222: number;
        let speedx2: any;
        let speedy2: any;
        if (a == 0) {
            reward222 = "Botes de Jhonia [+25 de velocitat]"
            speedy222 = speedy222 + 25
            speedx222 = speedx222 + 25
            speedx2 = speedx2 + 25
            speedy2 = speedy2 + 25
            game.showLongText("Has aconseguit: " + reward222, DialogLayout.Bottom)
        }
        
        if (a == 1) {
            reward222 = "5 vida extra"
            info.changeLifeBy(5)
            game.showLongText("Has aconseguit: " + reward222, DialogLayout.Bottom)
        }
        
        if (a == 2) {
            reward222 = "Botes de Ragnar [+40 de velocitat]"
            speedy222 = speedy222 + 40
            speedx222 = speedx222 + 40
            speedx2 = speedx2 + 40
            speedy2 = speedy2 + 40
            game.showLongText("Has aconseguit: " + reward222, DialogLayout.Bottom)
        }
        
        if (a == 3) {
            reward222 = "7 vida extra"
            info.changeLifeBy(3)
            game.showLongText("Has aconseguit: " + reward222, DialogLayout.Bottom)
        }
        
        if (a == 4) {
            game.showLongText("El cofre estava buit, no has trobat res", DialogLayout.Bottom)
        }
        
        if (a == 5) {
            reward222 = "Botes de Ragnar [+40 de velocitat]"
            speedy222 = speedy222 + 40
            speedx222 = speedx222 + 40
            speedx2 = speedx2 + 40
            speedy2 = speedy2 + 40
            game.showLongText("Has aconseguit: " + reward222, DialogLayout.Bottom)
        }
        
        if (a == 6) {
            reward222 = "Botes de Jhonia [+25 de velocitat]"
            speedy222 = speedy222 + 25
            speedx222 = speedx222 + 25
            speedx2 = speedx2 + 25
            speedy2 = speedy2 + 25
            game.showLongText("Has aconseguit: " + reward222, DialogLayout.Bottom)
        }
        
    }
    
    //  Función para detectar cuando la status bar esta a 0
    statusbars.onZero(StatusBarKind.Health, function on_on_zero(status: StatusBarSprite) {
        sprites.destroy(statusbar.spriteAttachedTo(), effects.spray, 500)
    })
    //  Funciones para que te sigan los enemigos al detectarte a una distancia "custom" segun el tipo de mob
    game.onUpdate(function on_on_update() {
        for (let value24 of sprites.allOfKind(SpriteKind.Monster_mob)) {
            if (value24.x > mySprite.x - 30 && value24.x < mySprite.x + 30 && (value24.x > mySprite.x - 30 && value24.x < mySprite.x + 30)) {
                value24.follow(mySprite, 20)
                // Creamos projectiles al enemigo
                timer.after(100, function on_after() {
                    let dx = mySprite.y - value24.y
                    let dy = mySprite.x - value24.x
                    let radians = Math.atan2(dx, dy)
                    let projectile2 = sprites.createProjectileFromSprite(assets.image`projectile_monster`, value24, Math.cos(radians), Math.sin(radians))
                    projectile2.setKind(SpriteKind.enemie_projectile)
                    projectile2.setVelocity(Math.cos(radians) * 100, Math.sin(radians) * 100)
                })
            }
            
        }
    })
    game.onUpdate(function on_on_update2() {
        for (let value43 of sprites.allOfKind(SpriteKind.Phantom_mob)) {
            if (value43.x > mySprite.x - 50 && value43.x < mySprite.x + 50 && (value43.x > mySprite.x - 50 && value43.x < mySprite.x + 50)) {
                value43.follow(mySprite, 75)
            }
            
        }
    })
    game.onUpdate(function on_on_update3() {
        for (let value22 of sprites.allOfKind(SpriteKind.Snake_mob)) {
            if (value22.x > mySprite.x - 30 && value22.x < mySprite.x + 30 && (value22.x > mySprite.x - 30 && value22.x < mySprite.x + 30)) {
                value22.follow(mySprite, 30)
                timer.after(100, function on_after() {
                    let dx = mySprite.y - value22.y
                    let dy = mySprite.x - value22.x
                    let radians = Math.atan2(dx, dy)
                    let projectile2 = sprites.createProjectileFromSprite(assets.image`projectile_snake`, value22, Math.cos(radians), Math.sin(radians))
                    projectile2.setKind(SpriteKind.enemie_projectile)
                    projectile2.setVelocity(Math.cos(radians) * 75, Math.sin(radians) * 75)
                })
            }
            
        }
    })
    game.onUpdate(function on_on_update4() {
        for (let value23 of sprites.allOfKind(SpriteKind.Crab_mob)) {
            if (value23.x > mySprite.x - 20 && value23.x < mySprite.x + 20 && (value23.x > mySprite.x - 20 && value23.x < mySprite.x + 20)) {
                value23.follow(mySprite, 8)
            }
            
        }
    })
    game.onUpdate(function on_on_update_boss() {
        for (let boss of sprites.allOfKind(SpriteKind.Phantom_boss_mob)) {
            if (boss.x > mySprite.x - 100 && boss.x < mySprite.x + 100 && (boss.x > mySprite.x - 100 && boss.x < mySprite.x + 100)) {
                boss.follow(mySprite, 25)
                timer.throttle("action", 100, function on_throttle() {
                    let dx = mySprite.y - boss.y
                    let dy = mySprite.x - boss.x
                    let radians = Math.atan2(dx, dy)
                    let projectile2 = sprites.createProjectileFromSprite(assets.image`projectile_phantomboss`, boss, Math.cos(radians), Math.sin(radians))
                    projectile2.setKind(SpriteKind.enemie_projectile)
                    projectile2.setVelocity(Math.cos(radians) * 150, Math.sin(radians) * 150)
                })
            }
            
        }
    })
    //  Función para ver cuando tienes los dos llaves en tu inventario
    game.onUpdateInterval(100, function on_update_interval() {
        let monster_killed22: number;
        let quest_list_monsters_killed22: number;
        let reward3: string;
        if (conversation_done5 == true) {
            monster_killed22 = 0
            quest_list_monsters_killed22 = 0
            if (quest_list_monsters_killed22 >= 5) {
                reward3 = "'Mitja Clau Pt1 [Casa Encantada]'"
                inventory.push(reward3)
                game.showLongText("Has complert la missió, aconseguit 'Mitja Clau Pt1 [Casa Encantada]'", DialogLayout.Bottom)
            } else if (monster_killed22 >= 5) {
                reward3 = "'Mitja Clau Pt1 [Casa Encantada]'"
                inventory.push(reward3)
                game.showLongText("Has complert la missió, aconseguit 'Mitja Clau Pt1 [Casa Encantada]'", DialogLayout.Bottom)
            }
            
        }
        
    })
    game.onUpdateInterval(100, function on_update_interval2() {
        controller.moveSprite(mySprite, speedx222, speedy222)
        if (controller.left.isPressed()) {
            
        }
        
        //  speedx -= 5
        if (controller.right.isPressed()) {
            
        }
        
        //  speedx += 5
        if (controller.up.isPressed()) {
            
        }
        
        //  speedy -= 5
        if (controller.down.isPressed()) {
            
        }
        
        //  speedy += 5
        scene.cameraFollowSprite(mySprite)
    })
    //  Función para ver cuando has matado al jefe final
    game.onUpdateInterval(10, function on_update_interval3() {
        if (boss_destroyed) {
            game.showLongText("Has derrotat al Boss final", DialogLayout.Bottom)
            game.splash("Felicitats, has derrotat el mal")
        }
        
    })
    //  Cuando el jugador toca el mago después de usar el teletransporte
    sprites.onOverlap(SpriteKind.Player, SpriteKind.NPC, function on_on_overlap9(sprite5: Sprite, otherSprite23: Sprite) {
        
        if (conversation_done5 == false) {
            game.splash("\"Hey! Abans de res et donaré unes indicacions\"")
            game.splash("\"Si segueixes el camí cap a la dreta, arribarás al petit poble \"Johto\"\"")
            game.splash("\"Allà trobaràs a l'alcalde esperante al principi del poble\"")
            game.splash("\"Ell et donarà les seguents indicacions\"")
        }
        
        conversation_done5 = true
    })
}

