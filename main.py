@namespace
class SpriteKind:
    Stuff = SpriteKind.create()
    Teleport = SpriteKind.create()
    NPC = SpriteKind.create()
    casa = SpriteKind.create()
    Citizen1 = SpriteKind.create()
    Citizen2 = SpriteKind.create()
    Citizen3 = SpriteKind.create()
    Mayor1 = SpriteKind.create()
    Mayor2 = SpriteKind.create()
    Peaceful_mob = SpriteKind.create()
    Snake_mob = SpriteKind.create()
    Crab_mob = SpriteKind.create()
    Monster_mob = SpriteKind.create()
    Phantom_mob = SpriteKind.create()
    Phantom_boss_mob = SpriteKind.create()
#Variables
sprite_house4: Sprite = None
sprite_house2: Sprite = None
conversation_done7 = False
phantom_boss: Sprite = None
conversation_done6 = False
snake: Sprite = None
sprite_house3: Sprite = None
statusbar: StatusBarSprite = None
statusbarboss: StatusBarSprite = None
citizen_mayor2: Sprite = None
citizen_mayor: Sprite = None
citizen_jake3: Sprite = None
citizen_jake2: Sprite = None
citizen_jake: Sprite = None
PC_master: Sprite = None
chest_1_open = False
chest_2_open = False
chest_3_open = False
chest_lava_open = False
a = 0
speedy222 = 85
speedx222 = 85
projectile: Sprite = None
list_mobcap_snake3: List[Sprite] = []
list_mobcap_snake2: List[Sprite] = []
list_mobcap_snake1: List[Sprite] = []
list_mobcap_crab4: List[Sprite] = []
list_mobcap_crab3: List[Sprite] = []
list_mobcap_crab2: List[Sprite] = []
list_mobcap_crab1: List[Sprite] = []
list_mobcap_fish8: List[Sprite] = []
list_mobcap_fish7: List[Sprite] = []
list_mobcap_fish6: List[Sprite] = []
list_mobcap_fish5: List[Sprite] = []
list_mobcap_fish4: List[Sprite] = []
list_mobcap_fish3: List[Sprite] = []
list_mobcap_fish2: List[Sprite] = []
list_mobcap_fish1: List[Sprite] = []
list_mobcap_enemyMobs2: List[Sprite] = []
list_mobcap_enemyMobs1: List[Sprite] = []
list_mobcap_phantom: List[Sprite] = []
list_mobcap_phantomboss: List[Sprite] = []
inventory: List[str] = []
conversation_done5 = False
enemymobs_killed: List[number] = []
sprite_house1: Sprite = None
user_option = ""
keep_asking = False
conversation_done = False
NPC_master: Sprite = None
mySprite: Sprite = None
direction = 0
warning_text = ""
number_of_keys = 0
reward2222 = ""
b = 0
count = 0
boss_destroyed = False
last_digit = 0
citizen_jake4 = None
PC_master2 = None
crab_killed2 = 0
snake_killed2 = 0
phantom_killed2 = 0
citizen_jake22 = None
citizen_jake32 = None
citizen_mayor3 = None
citizen_mayor22 = None
enemyMonster2 = None
spawn_number_mobs_fish = 0
spawn_number_mobs2 = 0
spawn_number_mobs = 0
enemy_kills = 0
os1 = False
warning_text = "Abans d'utilitzar al teletransportador, ves a veure al mag"
direction = 0
height = 160
width = 120
nestedMenu: miniMenu.MenuSprite = None
LegsMenu: miniMenu.MenuSprite = None
torsoMenu: miniMenu.MenuSprite = None
headMenu: miniMenu.MenuSprite = None
myMenu: miniMenu.MenuSprite = None
scene.set_background_color(12)
metaMenu = miniMenu.create_menu(miniMenu.create_menu_item("MENU"),
    miniMenu.create_menu_item("Dificultat"))

def on_button_pressed10(selection11, selectedIndex11):
    metaMenu.close()
    if selectedIndex11 == 0:
        framedMenu()
    else:
        framedMenu()
metaMenu.on_button_pressed(controller.A, on_button_pressed10)

def framedMenu():
    global myMenu
    myMenu = miniMenu.create_menu(miniMenu.create_menu_item("Fàcil"),
        miniMenu.create_menu_item("Mitjà"),
        miniMenu.create_menu_item("Difícil"),
        miniMenu.create_menu_item("Extrem"))
    myMenu.set_menu_style_property(miniMenu.MenuStyleProperty.WIDTH, 100)
    myMenu.set_menu_style_property(miniMenu.MenuStyleProperty.HEIGHT, 60)
    myMenu.y = 60
    myMenu.x = 80
    myMenu.set_frame(img("""
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
    """))
    myMenu.set_style_property(miniMenu.StyleKind.DEFAULT,
        miniMenu.StyleProperty.BACKGROUND,
        6)
    myMenu.set_style_property(miniMenu.StyleKind.DEFAULT,
        miniMenu.StyleProperty.FOREGROUND,
        1)
    def on_button_event_a_pressed():
        game2()
    controller.player1.on_button_event(ControllerButton.A, ControllerButtonEvent.PRESSED, on_button_event_a_pressed)

def game2():
    myMenu.close()
    info.set_life(10)
    mySprite = sprites.create(assets.image("""
        mySprite
    """), SpriteKind.player)
    animation.run_image_animation(mySprite, assets.animation("""
        myAnim
    """), 200, True)
    NPC_master = sprites.create(assets.image("""
        npc_master
    """), SpriteKind.NPC)
    NPC_master.set_position(200, 50)
    tiles.set_current_tilemap(tilemap("""level0"""))
    scene.center_camera_at(20, 20)
    
    # Generar todos los NPCs del mapa
    def create_all_NPCs():
        global PC_master, citizen_jake, citizen_jake2, citizen_jake3, citizen_mayor, citizen_mayor2
        PC_master = sprites.create(assets.image("""
            npc_master
        """), SpriteKind.NPC)
        citizen_jake = sprites.create(assets.image("""
            Citizen1
        """), SpriteKind.Citizen1)
        citizen_jake2 = sprites.create(assets.image("""
            citizen2
        """), SpriteKind.Citizen2)
        citizen_jake3 = sprites.create(assets.image("""
            Citizen1
        """), SpriteKind.Citizen3)
        citizen_mayor = sprites.create(assets.image("""
            citizen_mayor
        """), SpriteKind.Mayor1)
        citizen_mayor2 = sprites.create(assets.image("""
            citizen_mayor
        """), SpriteKind.Mayor1)
        PC_master.set_position(100, 60)
        citizen_jake.set_position(520, 185)
        citizen_jake2.set_position(260, 465)
        citizen_jake3.set_position(1475, 670)
        citizen_mayor.set_position(1140, 175)
        citizen_mayor2.set_position(490, 1165)

    # Funciónes para crear montruos enemigos
    def create_mob_cap(list_mob: List[Sprite], how_many_mobs: number):
        global statusbar
        for index in range(how_many_mobs):
            enemyMonster = sprites.create(assets.image("""
                monster
            """), SpriteKind.Monster_mob)
            statusbar = statusbars.create(20, 3, StatusBarKind.health)
            statusbar.set_color(2, 13)
            statusbar.set_status_bar_flag(StatusBarFlag.SMOOTH_TRANSITION, True)
            statusbar.attach_to_sprite(enemyMonster)
            sprites.set_data_number(enemyMonster, "HP", 3)
            animation.run_image_animation(enemyMonster,
                assets.animation("""
                    monster_anim
                """),
                200,
                True)
            list_mob.append(enemyMonster)

    def create_mob_cap_snake(list_mob22222: List[Sprite], how_many_mobs2: number):
        global snake, statusbar
        for index2 in range(how_many_mobs2):
            snake = sprites.create(assets.image("""
                snake
            """), SpriteKind.Snake_mob)
            statusbar = statusbars.create(30, 3, StatusBarKind.health)
            statusbar.set_color(2, 13)
            statusbar.set_status_bar_flag(StatusBarFlag.SMOOTH_TRANSITION, True)
            statusbar.attach_to_sprite(snake)
            sprites.set_data_number(snake, "HP", 4)
            animation.run_image_animation(snake, assets.animation("""
                snake_anim
            """), 200, True)
            list_mob22222.append(snake)

    def create_mob_cap_fish(list_mob22: List[Sprite], how_many_mobs5: number):
        for index5 in range(how_many_mobs5):
            fish = sprites.create(assets.image("""
                fish1
            """), SpriteKind.Peaceful_mob)
            animation.run_image_animation(fish, assets.animation("""
                fish_anim
            """), 200, True)
            list_mob22.append(fish)

    def create_mob_cap_fish2(list_mob222: List[Sprite], how_many_mobs3: number):
        for index3 in range(how_many_mobs3):
            fish2 = sprites.create(assets.image("""
                fish2
            """), SpriteKind.Peaceful_mob)
            animation.run_image_animation(fish2, assets.animation("""
                fish2_anim
            """), 200, True)
            list_mob222.append(fish2)

    def create_mob_cap_crab(list_mob2222: List[Sprite], how_many_mobs4: number):
        global statusbar
        for index4 in range(how_many_mobs4):
            crab = sprites.create(assets.image("""
                crab
            """), SpriteKind.Crab_mob)
            statusbar = statusbars.create(10, 3, StatusBarKind.health)
            statusbar.set_color(2, 13)
            statusbar.set_status_bar_flag(StatusBarFlag.SMOOTH_TRANSITION, True)
            statusbar.attach_to_sprite(crab)
            sprites.set_data_number(crab, "HP", 1)
            animation.run_image_animation(crab, assets.animation("""
                crab_anim
            """), 200, True)
            list_mob2222.append(crab)

    def create_mob_cap_phantom(list_mob34234: List[Sprite], how_many_phantom_mobs: number):
        global statusbar
        for index6 in range(how_many_phantom_mobs):
            phantom = sprites.create(assets.image("""
                skeleton
            """), SpriteKind.Phantom_mob)
            statusbar = statusbars.create(30, 3, StatusBarKind.health)
            statusbar.set_color(2, 13)
            statusbar.set_status_bar_flag(StatusBarFlag.SMOOTH_TRANSITION, True)
            statusbar.attach_to_sprite(phantom)
            sprites.set_data_number(snake, "HP", 5)
            animation.run_image_animation(phantom,
                assets.animation("""
                    phantom_anim
                """),
                200,
                True)
            list_mob34234.append(phantom)

    def create_mob_cap_phantom_boss(list_mob222222: List[Sprite], how_many_mobs22: number):
        global statusbarboss
        for index7 in range(how_many_mobs22):
            phantom_boss = sprites.create(assets.image("""
                    phantom_boss
                """),
                SpriteKind.Phantom_boss_mob)
            statusbarboss = statusbars.create(80, 3, StatusBarKind.health)
            statusbarboss.set_color(2, 13)
            statusbarboss.set_status_bar_flag(StatusBarFlag.SMOOTH_TRANSITION, True)
            statusbarboss.attach_to_sprite(phantom_boss)
            sprites.set_data_number(phantom_boss, "HP", 6)
            animation.run_image_animation(phantom_boss,
                assets.animation("""
                    phantomboss_anim0
                """),
                200,
                True)
            list_mob222222.append(phantom_boss)

    # Función para los mobs creados, spawnerlos en el mapa
    def create_all_mobs():
        # Spawn dels "Monster_mob"
        create_mob_cap(list_mobcap_enemyMobs1, 10)
        generate_mobs_in_map(list_mobcap_enemyMobs1, 1350, 1800, 850, 1150)
        create_mob_cap(list_mobcap_enemyMobs2, 6)
        generate_mobs_in_map(list_mobcap_enemyMobs2, 1550, 1800, 200, 550)
        # Spawn dels "Peaceful_mob"
        # Big lake
        create_mob_cap_fish2(list_mobcap_fish1, 3)
        generate_mobs_in_map(list_mobcap_fish1, 780, 900, 710, 960)
        create_mob_cap_fish(list_mobcap_fish2, 2)
        generate_mobs_in_map(list_mobcap_fish2, 640, 740, 710, 960)
        create_mob_cap_fish(list_mobcap_fish3, 2)
        generate_mobs_in_map(list_mobcap_fish3, 640, 840, 650, 800)
        create_mob_cap_fish2(list_mobcap_fish4, 3)
        generate_mobs_in_map(list_mobcap_fish4, 540, 640, 740, 850)
        # Small left lake
        create_mob_cap_fish(list_mobcap_fish5, 3)
        generate_mobs_in_map(list_mobcap_fish5, 75, 125, 1150, 1275)
        create_mob_cap_fish2(list_mobcap_fish6, 2)
        generate_mobs_in_map(list_mobcap_fish6, 75, 125, 1150, 1275)
        # Small right lake
        create_mob_cap_fish(list_mobcap_fish7, 2)
        generate_mobs_in_map(list_mobcap_fish7, 1660, 1725, 80, 170)
        create_mob_cap_fish2(list_mobcap_fish8, 3)
        generate_mobs_in_map(list_mobcap_fish8, 1660, 1750, 80, 170)
        # Spawn dels "Crab_mob"
        create_mob_cap_crab(list_mobcap_crab1, 3)
        generate_mobs_in_map(list_mobcap_crab1, 560, 620, 600, 700)
        create_mob_cap_crab(list_mobcap_crab2, 3)
        generate_mobs_in_map(list_mobcap_crab2, 920, 1000, 700, 800)
        create_mob_cap_crab(list_mobcap_crab3, 3)
        generate_mobs_in_map(list_mobcap_crab3, 560, 620, 970, 1020)
        create_mob_cap_crab(list_mobcap_crab4, 3)
        generate_mobs_in_map(list_mobcap_crab4, 820, 900, 1000, 1070)
        # Spawn dels "Snake_mob"
        create_mob_cap_snake(list_mobcap_snake1, 3)
        generate_mobs_in_map(list_mobcap_snake1, 1100, 1200, 1700, 1800)
        create_mob_cap_snake(list_mobcap_snake2, 3)
        generate_mobs_in_map(list_mobcap_snake2, 1200, 1340, 1460, 1520)
        create_mob_cap_snake(list_mobcap_snake3, 3)
        generate_mobs_in_map(list_mobcap_snake3, 1600, 1780, 1350, 1450)
        # Spawn dels "Phantom_mob"
        create_mob_cap_phantom(list_mobcap_phantom, 8)
        generate_mobs_in_map(list_mobcap_phantom, 1500, 1850, 1675, 1900)
        # Spawn del "Phantom_boss"
        create_mob_cap_phantom_boss(list_mobcap_phantomboss, 1)
        generate_mobs_in_map(list_mobcap_phantomboss, 1865,1865,1860,1860)

    # Creación de sprites de casas
    def create_sprites(pos_x: number, pos_y: number):
        global sprite_house1
        sprite_house1 = sprites.create(img("""
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
            """),
            SpriteKind.Stuff)
        sprite_house1.set_position(pos_x, pos_y)
        return sprite_house1

    def create_sprites2(posx3: number, posy3: number):
        global sprite_house2
        sprite_house2 = sprites.create(img("""
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
            """),
            SpriteKind.Stuff)
        sprite_house2.set_position(posx3, posy3)
        return sprite_house2

    def create_sprites3(posx2: number, posy2: number):
        global sprite_house3
        sprite_house3 = sprites.create(img("""
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
            """),
            SpriteKind.Stuff)
        sprite_house3.set_position(posx2, posy2)
        return sprite_house3

    def create_sprites4(posx4: number, posy4: number):
        global sprite_house4
        sprite_house4 = sprites.create(img("""
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
            """),
            SpriteKind.Stuff)
        sprite_house4.set_position(posx4, posy4)
        return sprite_house4

    # Destruir todos los sprites
    def destroy_all_sprites():
        sprites.destroy_all_sprites_of_kind(SpriteKind.NPC)
        sprites.destroy_all_sprites_of_kind(SpriteKind.Stuff)
        sprites.destroy_all_sprites_of_kind(SpriteKind.Citizen1)
        sprites.destroy_all_sprites_of_kind(SpriteKind.Citizen2)
        sprites.destroy_all_sprites_of_kind(SpriteKind.Citizen3)
        sprites.destroy_all_sprites_of_kind(SpriteKind.Mayor1)
        sprites.destroy_all_sprites_of_kind(SpriteKind.Mayor2)
        sprites.destroy_all_sprites_of_kind(SpriteKind.Peaceful_mob)
        sprites.destroy_all_sprites_of_kind(SpriteKind.Monster_mob)
        sprites.destroy_all_sprites_of_kind(SpriteKind.Snake_mob)
        sprites.destroy_all_sprites_of_kind(SpriteKind.Crab_mob)
        sprites.destroy_all_sprites_of_kind(SpriteKind.Phantom_mob)
        sprites.destroy_all_sprites_of_kind(SpriteKind.Peaceful_mob)

    # Función para crear los edificios del pueblo grande
    def town_buildings_2():
        # Town 2
        create_sprites3(250, 1672)
        create_sprites3(520, 1560)
        create_sprites3(620, 1560)
        create_sprites(400, 1653)
        create_sprites2(520, 1672)
        create_sprites2(600, 1672)
        create_sprites2(680, 1672)
        create_sprites4(568, 1417)
        create_sprites4(175, 1450)

    # Función para crear los edificios del pueblo pequeño
    def town_buildings_1():
        # Town 1
        create_sprites(1290, 100)
        create_sprites2(1390, 120)
        create_sprites3(1180, 120)
        create_sprites4(1500, 105)

    # Función para colocar los mobs generados
    def generate_mobs_in_map(list_mob2: List[Sprite], x1: number, x2: number, y1: number, y2: number):
        for mob in list_mob2:
            x_pos_mob1 = randint(x1, x2)
            y_pos_mob1 = randint(y1, y2)
            mob.set_position(x_pos_mob1, y_pos_mob1)

    # Dirección de donde mira el jugador
    def on_a_pressed():
        global projectile
        if direction == 1:
            projectile = sprites.create_projectile_from_sprite(assets.image("""
                arrow
            """), mySprite, -150, 0)
        elif direction == 2:
            projectile = sprites.create_projectile_from_sprite(assets.image("""
                arrow0
            """), mySprite, 150, 0)
        elif direction == 3:
            projectile = sprites.create_projectile_from_sprite(assets.image("""
                arrow1
            """), mySprite, 0, -150)
        elif direction == 4:
            projectile = sprites.create_projectile_from_sprite(assets.image("""
                arrow2
            """), mySprite, 0, 150)
        else:
            pass
    controller.A.on_event(ControllerButtonEvent.PRESSED, on_a_pressed)

    def on_up_pressed():
        global direction
        direction = 3
        animation.run_image_animation(mySprite, assets.animation("""
            myAnim4
        """), 200, True)
    controller.up.on_event(ControllerButtonEvent.PRESSED, on_up_pressed)

    def on_left_pressed():
        global direction
        direction = 1
        animation.run_image_animation(mySprite, assets.animation("""
            myAnim3
        """), 200, True)
    controller.left.on_event(ControllerButtonEvent.PRESSED, on_left_pressed)

    def on_right_pressed():
        global direction
        direction = 2
        animation.run_image_animation(mySprite, assets.animation("""
            myAnim2
        """), 200, True)
    controller.right.on_event(ControllerButtonEvent.PRESSED, on_right_pressed)

    def on_down_pressed():
        global direction
        direction = 4
        animation.run_image_animation(mySprite, assets.animation("""
            myAnim
        """), 200, True)
    controller.down.on_event(ControllerButtonEvent.PRESSED, on_down_pressed)

    # Función recursiva para ver el número más pequeño dentro de una lista
    def find_min(my_list: List[number]):
        if len(my_list) == 0:
            return None
        if len(my_list) == 1:
            return my_list[0]
        temp = my_list[0] if my_list[0] < my_list[1] else my_list[1]
        my_list[1] = temp
        return find_min(my_list.slice(1))
       
    # Al tocar el mago empieza dialogo
    def on_overlap_tile(sprite422, location32):
        global keep_asking, user_option, conversation_done
        if conversation_done == False:
            keep_asking = True
            game.splash("\"Hola\"")
            game.splash("\"Gràcies per venir\"")
            game.splash("\"T'hem cridat ja que tenim uns quants problemes en els pobles\"")
            game.splash("\"Ens ajudaràs?\"")
            while keep_asking == True:
                user_option = game.ask_for_string("")
                if user_option == "SI" or user_option == "si":
                    game.splash("\"Gràcies per voler ajudar-nos\"")
                    keep_asking = False
                elif user_option == "NO" or user_option == "no":
                    game.splash("\"El 'NO', no era una opció\"")
                    game.splash("\"Et segueixo explicant\"")
                    keep_asking = False
                else:
                    game.splash("\"No t'he entès\"")
                    game.splash("\"Torna'm a dir-ho però més clar\"")
            game.splash("\"Per resoldre aquestes missions, hauràs d'anar a cada poble a preguntar als seus habitants \"")
            game.splash("\"... \"")
            game.splash("\"S'hem oblida alguna cosa ... \"")
            game.splash("\"JA SÈ! IMPORTANT ! \"")
            game.splash("\"Per cada missió que completis tindràs un recompensa,\"")
            game.splash("\"així que no t'oblidis de buscar-me\"")
            game.splash("\"Com a últim punt, per anar cap a la zona dels pobles, has d'anar abaix a la dreta del mapa i agafar el teletransportador\"")
        conversation_done = True
    scene.on_overlap_tile(SpriteKind.player,
        sprites.swamp.swamp_tile16,
        on_overlap_tile)

    # Cuando el jugador toca al alcalde del pueblo grande
    def on_on_overlap4(sprite, otherSprite):
        global conversation_done5
        if conversation_done5 == False:
            game.splash("\"Si has ajudat al altre alcalde, junt amb aquesta clau podrás entrar a la casa abandonada\"")
            game.splash("\"Hey Max! Gràcies per venir, tenim un gran problema.\"")
            game.splash("\"La casa més gran porta anys abandonada, però últimament, sentim sorolls extranys al soterrani.\"")
            game.splash("\"Hi ha històries que diuen que pot ser l'entrada d'una antiga masmorra.\"")
            game.splash("\"Ves i descobreix què està passant.\"")
            reward = "'Mitja Clau Pt2 [Casa Encantada]'"
            inventory.append(reward)
            game.show_long_text("Has aconseguit :" + reward, DialogLayout.BOTTOM)
        conversation_done5 = True
    sprites.on_overlap(SpriteKind.player, SpriteKind.Mayor1, on_on_overlap4)

    # Cuando el jugador toca al alcalde del pueblo pequeño
    def on_on_overlap11(sprite43, otherSprite34):
        global conversation_done5
        if conversation_done5 == False:
            game.splash("\"Max, la situació és crítica. Monstres al voltant del llac (segint el camí cap a la dreta) impedeixen pescar i tallar fusta.\"")
            game.splash("\"Sense menjar ni llenya, l'hivern serà dur.\"")
            game.splash("\"Ves al llac, elimina els monstres i assegura la supervivència de Johto.\"")
            game.splash("\"Confiem en tu, Max!\"")
            game.show_long_text("Has aconseguit la missió 'Mata als monstres del bosc', un cop finalitzada rebrás una recompensa",
                DialogLayout.BOTTOM)
        conversation_done5 = True
    sprites.on_overlap(SpriteKind.player, SpriteKind.Mayor2, on_on_overlap11)

    # Cuando el jugador choca con enemigos
    def on_on_overlap(sprite9, otherSprite62):
        info.change_life_by(-1)
        scene.camera_shake(4, 200)
        sprites.destroy(otherSprite62, effects.ashes, 350)
        otherSprite62.destroy()
        music.thump.play()
    sprites.on_overlap(SpriteKind.player, SpriteKind.Phantom_mob, on_on_overlap)

    def on_on_overlap2(sprite3, otherSprite2):
        info.change_life_by(-1)
        scene.camera_shake(4, 200)
        sprites.destroy(otherSprite2, effects.ashes, 350)
        otherSprite2.destroy()
        music.thump.play()
    sprites.on_overlap(SpriteKind.player, SpriteKind.Monster_mob, on_on_overlap2)

    def on_on_overlap13(sprite6, otherSprite322):
        info.change_life_by(-1)
        scene.camera_shake(4, 200)
        sprites.destroy(otherSprite322, effects.ashes, 350)
        otherSprite322.destroy()
        music.thump.play()
    sprites.on_overlap(SpriteKind.player, SpriteKind.Crab_mob, on_on_overlap13)

    def on_on_overlap20(sprite6, otherSprite322):
        def on_throttle2():
            info.change_life_by(-2)
            scene.camera_shake(4, 200)
            sprites.destroy(otherSprite322, effects.ashes, 350)
            otherSprite322.destroy()
            music.thump.play()
        timer.throttle("action", 500, on_throttle2)
    sprites.on_overlap(SpriteKind.player, SpriteKind.Phantom_boss_mob, on_on_overlap20)

    def on_on_overlap6(sprite25, otherSprite63):
        info.change_life_by(-2)
        scene.camera_shake(4, 200)
        sprites.destroy(otherSprite63, effects.ashes, 350)
        otherSprite63.destroy()
        music.thump.play()
    sprites.on_overlap(SpriteKind.player, SpriteKind.Snake_mob, on_on_overlap6)

    # Cuando el jugador lanza una fecha y toca al enemigo
    def on_on_overlap7(sprite8, otherSprite5):
        sprites.destroy(sprite8)
        statusbars.get_status_bar_attached_to(StatusBarKind.health, otherSprite5).value += -30
        sprites.change_data_number_by(otherSprite5, "HP", -1)
        if sprites.read_data_number(otherSprite5, "HP") <= 0:
            sprites.destroy(otherSprite5)
            crab_killed = 1
            count_kills(enemymobs_killed, "crab", 1)
    sprites.on_overlap(SpriteKind.projectile, SpriteKind.Crab_mob, on_on_overlap7)

    def on_on_overlap15(sprite242, otherSprite32):
        sprites.destroy(sprite242)
        statusbars.get_status_bar_attached_to(StatusBarKind.health, otherSprite32).value += -30
        sprites.change_data_number_by(otherSprite32, "HP", -1)
        if sprites.read_data_number(otherSprite32, "HP") <= 0:
            sprites.destroy(otherSprite32)
            snake_killed = 1
            count_kills(enemymobs_killed, "snake", 1)
    sprites.on_overlap(SpriteKind.projectile, SpriteKind.Snake_mob, on_on_overlap15)

    def on_on_overlap8(sprite23, otherSprite33):
        sprites.destroy(sprite23)
        statusbars.get_status_bar_attached_to(StatusBarKind.health, otherSprite33).value += -30
        sprites.change_data_number_by(otherSprite33, "HP", -1)
        if sprites.read_data_number(otherSprite33, "HP") <= 0:
            sprites.destroy(otherSprite33)
            monster_killed2 = monster_killed2 + 1
            count_kills(enemymobs_killed, "monster", 1)
            if conversation_done5:
                quest_list_monsters_killed2 = quest_list_monsters_killed2 + 1
    sprites.on_overlap(SpriteKind.projectile,
        SpriteKind.Monster_mob,
        on_on_overlap8)

    def on_on_overlap3(sprite7, otherSprite4):
        sprites.destroy(sprite7)
        statusbars.get_status_bar_attached_to(StatusBarKind.health, otherSprite4).value += -30
        sprites.change_data_number_by(otherSprite4, "HP", -1)
        if sprites.read_data_number(otherSprite4, "HP") <= 0:
            sprites.destroy(otherSprite4)
            phantom_killed = 1
            count_kills(enemymobs_killed, "phantom", 1)
    sprites.on_overlap(SpriteKind.projectile,
        SpriteKind.Phantom_mob,
        on_on_overlap3)

    def on_on_overlap_phantomboss(sprite2365, boss):
        sprites.destroy(sprite2365)
        statusbars.get_status_bar_attached_to(StatusBarKind.health, boss).value = -10
        sprites.change_data_number_by(boss, "HP", -1)
        if sprites.read_data_number(boss, "HP") <= 0:
            boss_destroyed = True
            game.show_long_text("Has derrotat al Boss final", DialogLayout.BOTTOM)
            game.splash("Felicitats, has derrotat el mal")
            sprites.destroy(boss)
            if conversation_done5:
                quest_list_monsters_killed2 = quest_list_monsters_killed2 + 1
    sprites.on_overlap(SpriteKind.projectile,
        SpriteKind.Phantom_boss_mob,
        on_on_overlap8)

    def on_on_overlap12(sprite4222, otherSprite222):
        sprites.destroy(sprite4222)
        statusbars.get_status_bar_attached_to(StatusBarKind.health, otherSprite222).value += -30
        sprites.change_data_number_by(otherSprite222, "HP", -1)
        if sprites.read_data_number(otherSprite222, "HP") <= 0:
            sprites.destroy(otherSprite222)
    sprites.on_overlap(SpriteKind.projectile, SpriteKind.enemy, on_on_overlap12)

    # Cuando el jugador toca el teletransporte del mapa incial
    def on_overlap_tile5(sprite222, location22):
        if conversation_done != True:
            splash_done = False
            if splash_done == False:
                def on_throttle2():
                    game.show_long_text(warning_text, DialogLayout.BOTTOM)
                timer.throttle("action", 2000, on_throttle2)
            else:
                game.splash("asd")
            splash_done = True
        else:
            sprites.destroy(NPC_master)
            tiles.set_current_tilemap(tilemap("""
                level3
            """))
            tiles.place_on_tile(sprite222, tiles.get_tile_location(4, 4))
            town_buildings_1()
            town_buildings_2()
            create_all_NPCs()
            create_all_mobs()
    scene.on_overlap_tile(SpriteKind.player,
        sprites.dungeon.collectible_insignia,
        on_overlap_tile5)

    # Cuando el jugador toca la puerta de la casa abandonada
    def on_overlap_tile2(sprite22, location2):
        tiles.set_current_tilemap(tilemap("""
            passage
        """))
        destroy_all_sprites()
        tiles.place_on_tile(mySprite, tiles.get_tile_location(2, 3))
        scene.camera_follow_sprite(sprite22)
    scene.on_overlap_tile(SpriteKind.player,
        sprites.dungeon.stair_ladder,
        on_overlap_tile2)

    # Cuando el jugador toca la entrada de la cueva
    def on_overlap_tile3(sprite223, location23):
        tiles.set_current_tilemap(tilemap("""
            lava_underground
        """))
        destroy_all_sprites()
        tiles.place_on_tile(mySprite, tiles.get_tile_location(8, 4))
        scene.camera_follow_sprite(sprite223)
    scene.on_overlap_tile(SpriteKind.player,
        sprites.builtin.forest_tiles14,
        on_overlap_tile3)

    # Cuando el jugador toca las escaleras de salida de la cueva
    def on_overlap_tile_lava_cave(sprite223, location23):
        tiles.set_current_tilemap(tilemap("""
            level3
        """))
        destroy_all_sprites()
        tiles.place_on_tile(mySprite, tiles.get_tile_location(8, 4))
        mySprite.set_position(1465, 668)
        create_all_NPCs()
        create_all_mobs()
        town_buildings_2()
        town_buildings_1()
        scene.camera_follow_sprite(sprite223)
    scene.on_overlap_tile(SpriteKind.player,
        sprites.dungeon.stair_west,
        on_overlap_tile_lava_cave)

    # Cuando el jugador toca la escalera para entrar a la mazmorra desde el pasillo secreto
    def on_overlap_tile6(sprite24, location):
        tiles.set_current_tilemap(tilemap("""
            level3
        """))
        tiles.place_on_tile(sprite24, tiles.get_tile_location(1600, 1600))
        mySprite.set_position(1480, 1660)
        scene.camera_follow_sprite(sprite24)
        create_mob_cap_phantom(list_mobcap_phantom, 8)
        generate_mobs_in_map(list_mobcap_phantom, 1500, 1850, 1675, 1900)
        create_mob_cap_phantom_boss(list_mobcap_phantomboss, 1)
        generate_mobs_in_map(list_mobcap_phantomboss, 1865,1865,1860,1860)
    scene.on_overlap_tile(SpriteKind.player,
        sprites.dungeon.stair_north,
        on_overlap_tile6)

    # Cuando el jugador toca las escaleras de salida del pasillo secreto
    def on_overlap_tile8(sprite12, location5):
        tiles.set_current_tilemap(tilemap("""
            level3
        """))
        tiles.place_on_tile(sprite12, tiles.get_tile_location(1600, 300))
        mySprite.set_position(413, 1733)
        create_all_mobs()
        create_all_NPCs()
        town_buildings_1()
        town_buildings_2()
        scene.camera_follow_sprite(sprite12)
    scene.on_overlap_tile(SpriteKind.player,
        sprites.dungeon.stair_south,
        on_overlap_tile8)

    # Cuando el jugador toca las escaleras de la mazmorra para volver al pasillo secreto
    def on_overlap_tile9(sprite11, location4):
        tiles.set_current_tilemap(tilemap("""
            passage
        """))
        tiles.place_on_tile(sprite11, tiles.get_tile_location(2, 12))
        scene.camera_follow_sprite(sprite11)
        sprites.destroy_all_sprites_of_kind(SpriteKind.Phantom_mob)
        sprites.destroy_all_sprites_of_kind(SpriteKind.Phantom_boss_mob)
    scene.on_overlap_tile(SpriteKind.player,
        sprites.dungeon.stair_large,
        on_overlap_tile9)

    # Cuando el jugador toca un habitante de tartaria
    def on_on_overlap5(sprite42, otherSprite22):
        global conversation_done5
        if conversation_done5 == False:
            game.splash("\"Si vols anar cap al poble (Johto\"), segueix cap a dalt\"")
            game.splash("\"Ves amb compte quan agafis al camí cap abaix\"")
            game.splash("\"Hi han uns crancs molt agresius\"")
        conversation_done5 = True
    sprites.on_overlap(SpriteKind.player, SpriteKind.Citizen1, on_on_overlap5)

    # Cuando el jugador toca un habitante de tartaria
    def on_on_overlap14(sprite4, otherSprite6):
        global conversation_done7
        if conversation_done7 == False:
            game.splash("\"Hola Max!\"")
            game.splash("\"Aquí devant tens la cova, ves amb compte si entres\"")
            game.splash("\"També tens aquí darrere meu un gran bosc frondós\"")
            game.splash("\"Ves amb compte, fa temps van aperèixer monstres extranys!\"")
        conversation_done7 = True
    sprites.on_overlap(SpriteKind.player, SpriteKind.Citizen3, on_on_overlap14)

    # Cuando el jugador toca un habitante de tartaria
    def on_on_overlap10(sprite2, otherSprite3):
        global conversation_done6
        if conversation_done6 == False:
            game.splash("\"Puff, cada cop hi han més perills\"")
            game.splash("\"Per sort, aquesta zona es tranquila\"")
            game.splash("\"La zona més perillosa es sens dubte al Est\"")
        conversation_done6 = True
    sprites.on_overlap(SpriteKind.player, SpriteKind.Citizen2, on_on_overlap10)

    # Contar los mobs muertos
    def count_kills(enemymobs_killed2: List[number], type_mob: str, value: number):
        if type_mob == "monster":
            enemymobs_killed2[0] += value
        if type_mob == "crab":
            enemymobs_killed2[1] += value
        if type_mob == "snake":
            enemymobs_killed2[2] += value
        if type_mob == "phantom":
            enemymobs_killed2[3] += value

    # Cuando el jugador toca cofres
    def on_overlap_tile4(sprite10, location3):
        def on_throttle():
            global a, chest_1_open, speedy222, speedx222
            a = randint(0, 5)
            if chest_1_open == False:
                if a == 0:
                    reward22 = "1 vida extra"
                    info.change_life_by(1)
                    game.show_long_text("Has aconseguit: " + reward22, DialogLayout.BOTTOM)
                if a == 1:
                    reward22 = "Botes de Jhonia [+25 de velocitat]"
                    speedy222 = speedy222 + 25
                    speedx222 = speedx222 + 25
                    speedx2 = speedx2 + 25
                    speedy2 = speedy2 + 25
                    game.show_long_text("Has aconseguit: " + reward22, DialogLayout.BOTTOM)
                if a == 2:
                    reward22 = "Botes de Ragnar [+40 de velocitat]"
                    speedy222 = speedy222 + 40
                    speedx222 = speedx222 + 40
                    speedx2 = speedx2 + 40
                    speedy2 = speedy2 + 40
                    game.show_long_text("Has aconseguit: " + reward22, DialogLayout.BOTTOM)
                if a == 3:
                    reward22 = "3 vida extra"
                    info.change_life_by(3)
                    game.show_long_text("Has aconseguit: " + reward22, DialogLayout.BOTTOM)
                if a == 4:
                    reward22 = "5 vida extra"
                    info.change_life_by(5)
                    game.show_long_text("Has aconseguit: " + reward22, DialogLayout.BOTTOM)
                if a == 5:
                    game.show_long_text("El cofre estava buit ", DialogLayout.BOTTOM)
            else:
                game.show_long_text("El cofre estava buit ", DialogLayout.BOTTOM)
            chest_1_open = True
        timer.throttle("action", 1000, on_throttle)
    scene.on_overlap_tile(SpriteKind.player,
        assets.tile("""
            dungeon_chest
        """),
        on_overlap_tile4)

    def on_overlap_tile7(sprite103, location34):
        def on_throttle3():
            global a, chest_3_open
            a = randint(0, 5)
            if chest_3_open == False:
                if a == 0:
                    reward223 = "1 vida extra"
                    info.change_life_by(1)
                    game.show_long_text("Has aconseguit: " + reward223, DialogLayout.BOTTOM)
                if a == 1:
                    reward223 = "Botes de Jhonia [+25 de velocitat]"
                    speedy222 = speedy222 + 25
                    speedx222 = speedx222 + 25
                    speedx2 = speedx2 + 25
                    speedy2 = speedy2 + 25
                    game.show_long_text("Has aconseguit: " + reward223, DialogLayout.BOTTOM)
                if a == 2:
                    reward223 = "Botes de Ragnar [+40 de velocitat]"
                    speedy222 = speedy222 + 40
                    speedx222 = speedx222 + 40
                    speedx2 = speedx2 + 40
                    speedy2 = speedy2 + 40
                    game.show_long_text("Has aconseguit: " + reward223, DialogLayout.BOTTOM)
                if a == 3:
                    reward223 = "3 vida extra"
                    info.change_life_by(3)
                    game.show_long_text("Has aconseguit: " + reward223, DialogLayout.BOTTOM)
                if a == 4:
                    reward223 = "5 vida extra"
                    info.change_life_by(5)
                    game.show_long_text("Has aconseguit: " + reward223, DialogLayout.BOTTOM)
                if a == 5:
                    game.show_long_text("El cofre estava buit ", DialogLayout.BOTTOM)
            else:
                game.show_long_text("El cofre estava buit ", DialogLayout.BOTTOM)
            chest_3_open = True
        timer.throttle("action", 1000, on_throttle3)
    scene.on_overlap_tile(SpriteKind.player,
        assets.tile("""
            dungeon_chest2
        """),
        on_overlap_tile7)

    def on_overlap_tile10(sprite102, location33):
        def on_throttle4():
            global a, chest_2_open
            a = randint(0, 5)
            if chest_2_open == False:
                if a == 0:
                    reward222 = "1 vida extra"
                    info.change_life_by(1)
                    game.show_long_text("Has aconseguit: " + reward222, DialogLayout.BOTTOM)
                if a == 1:
                    reward222 = "Botes de Jhonia [+25 de velocitat]"
                    speedy222 = speedy222 + 25
                    speedx222 = speedx222 + 25
                    speedx2 = speedx2 + 25
                    speedy2 = speedy2 + 25
                    game.show_long_text("Has aconseguit: " + reward222, DialogLayout.BOTTOM)
                if a == 2:
                    reward222 = "Botes de Ragnar [+40 de velocitat]"
                    speedy222 = speedy222 + 40
                    speedx222 = speedx222 + 40
                    speedx2 = speedx2 + 40
                    speedy2 = speedy2 + 40
                    game.show_long_text("Has aconseguit: " + reward222, DialogLayout.BOTTOM)
                if a == 3:
                    reward222 = "3 vida extra"
                    info.change_life_by(3)
                    game.show_long_text("Has aconseguit: " + reward222, DialogLayout.BOTTOM)
                if a == 4:
                    reward222 = "5 vida extra"
                    info.change_life_by(5)
                    game.show_long_text("Has aconseguit: " + reward222, DialogLayout.BOTTOM)
                if a == 5:
                    game.show_long_text("El cofre estava buit ", DialogLayout.BOTTOM)
            else:
                game.show_long_text("Ja has obert aquest cofre ", DialogLayout.BOTTOM)
            chest_2_open = True
        timer.throttle("action", 1000, on_throttle4)
    scene.on_overlap_tile(SpriteKind.player,
        assets.tile("""
            dungeon_chest1
        """),
        on_overlap_tile10)

    def on_overlap_tile_chest_lava(sprite102, location33):
        def on_throttle4():
            global a, chest_lava_open
            a = randint(0, 5)
            if chest_lava_open == False:
                if a == 0:
                    reward222 = "1 vida extra"
                    info.change_life_by(1)
                    game.show_long_text("Has aconseguit: " + reward222, DialogLayout.BOTTOM)
                if a == 1:
                    reward222 = "Botes de Jhonia [+25 de velocitat]"
                    speedy222 = speedy222 + 25
                    speedx222 = speedx222 + 25
                    speedx2 = speedx2 + 25
                    speedy2 = speedy2 + 25
                    game.show_long_text("Has aconseguit: " + reward222, DialogLayout.BOTTOM)
                if a == 2:
                    reward222 = "Botes de Ragnar [+40 de velocitat]"
                    speedy222 = speedy222 + 40
                    speedx222 = speedx222 + 40
                    speedx2 = speedx2 + 40
                    speedy2 = speedy2 + 40
                    game.show_long_text("Has aconseguit: " + reward222, DialogLayout.BOTTOM)
                if a == 3:
                    reward222 = "3 vida extra"
                    info.change_life_by(3)
                    game.show_long_text("Has aconseguit: " + reward222, DialogLayout.BOTTOM)
                if a == 4:
                    reward222 = "5 vida extra"
                    info.change_life_by(5)
                    game.show_long_text("Has aconseguit: " + reward222, DialogLayout.BOTTOM)
                if a == 5:
                    game.show_long_text("El cofre estava buit ", DialogLayout.BOTTOM)
            else:
                game.show_long_text("Ja has obert aquest cofre ", DialogLayout.BOTTOM)
            chest_lava_open = True
        timer.throttle("action", 1000, on_throttle4)
    scene.on_overlap_tile(SpriteKind.player,
        assets.tile("""
            myTile0
        """),
        on_overlap_tile_chest_lava)

    # Función para detectar cuando la status bar esta a 0
    def on_on_zero(status):
        sprites.destroy(statusbar.sprite_attached_to(), effects.spray, 500)
    statusbars.on_zero(StatusBarKind.health, on_on_zero)

    # Funciones para que te sigan los enemigos al detectarte a una distancia "custom" segun el tipo de mob
    def on_on_update():
        for value24 in sprites.all_of_kind(SpriteKind.Monster_mob):
            if value24.x > mySprite.x - 20 and value24.x < mySprite.x + 20 and (value24.x > mySprite.x - 20 and value24.x < mySprite.x + 20):
                value24.follow(mySprite, 20)
    game.on_update(on_on_update)

    def on_on_update2():
        for value43 in sprites.all_of_kind(SpriteKind.Phantom_mob):
            if value43.x > mySprite.x - 30 and value43.x < mySprite.x + 30 and (value43.x > mySprite.x - 30 and value43.x < mySprite.x + 30):
                value43.follow(mySprite, 75)
    game.on_update(on_on_update2)

    def on_on_update3():
        for value22 in sprites.all_of_kind(SpriteKind.Snake_mob):
            if value22.x > mySprite.x - 30 and value22.x < mySprite.x + 30 and (value22.x > mySprite.x - 30 and value22.x < mySprite.x + 30):
                value22.follow(mySprite, 30)
    game.on_update(on_on_update3)

    def on_on_update4():
        for value23 in sprites.all_of_kind(SpriteKind.Crab_mob):
            if value23.x > mySprite.x - 8 and value23.x < mySprite.x + 8 and (value23.x > mySprite.x - 8 and value23.x < mySprite.x + 8):
                value23.follow(mySprite, 8)
    game.on_update(on_on_update4)

    def on_on_update_boss():
        for boss in sprites.all_of_kind(SpriteKind.Phantom_boss_mob):
            if boss.x > mySprite.x - 100 and boss.x < mySprite.x + 100 and (boss.x > mySprite.x - 100 and boss.x < mySprite.x + 100):
                boss.follow(mySprite, 25)
    game.on_update(on_on_update_boss)

    # Función para ver cuando tienes los dos llaves en tu inventario
    def on_update_interval():
        if conversation_done5 == True:
            monster_killed22 = 0
            quest_list_monsters_killed22 = 0
            if quest_list_monsters_killed22 >= 5:
                reward3 = "'Mitja Clau Pt1 [Casa Encantada]'"
                inventory.append(reward3)
                game.show_long_text("Has complert la missió, aconseguit 'Mitja Clau Pt1 [Casa Encantada]'",
                    DialogLayout.BOTTOM)
            elif monster_killed22 >= 5:
                reward3 = "'Mitja Clau Pt1 [Casa Encantada]'"
                inventory.append(reward3)
                game.show_long_text("Has complert la missió, aconseguit 'Mitja Clau Pt1 [Casa Encantada]'",
                    DialogLayout.BOTTOM)
    game.on_update_interval(100, on_update_interval)

    def on_update_interval2():
        controller.move_sprite(mySprite, speedx222, speedy222)
        if controller.left.is_pressed():
            pass
        # speedx -= 5
        if controller.right.is_pressed():
            pass
        # speedx += 5
        if controller.up.is_pressed():
            pass
        # speedy -= 5
        if controller.down.is_pressed():
            pass
        # speedy += 5
        scene.camera_follow_sprite(mySprite)
    game.on_update_interval(100, on_update_interval2)

    # Función para ver cuando has matado al jefe final
    def on_update_interval3():
        if boss_destroyed :
            game.show_long_text("Has derrotat al Boss final", DialogLayout.BOTTOM)
            game.splash("Felicitats, has derrotat el mal")
    game.on_update_interval(10, on_update_interval3)

    # Cuando el jugador toca el mago después de usar el teletransporte
    def on_on_overlap9(sprite5, otherSprite23):
        global conversation_done5
        if conversation_done5 == False:
            game.splash("\"Hey! Abans de res et donaré unes indicacions\"")
            game.splash("\"Si segueixes el camí cap a la dreta, arribarás al petit poble \"Johto\"\"")
            game.splash("\"Allà trobaràs a l'alcalde esperante al principi del poble\"")
            game.splash("\"Ell et donarà les seguents indicacions\"")
        conversation_done5 = True
    sprites.on_overlap(SpriteKind.player, SpriteKind.NPC, on_on_overlap9)