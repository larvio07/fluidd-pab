var e={app:{bedmesh:{label:{active:"активно",box_scale:"Масштаб координат",flat_surface:"Показати базову площину",mesh_matrix:"Сітчаста матриця",probed_matrix:"Зондована матриця",profile_name:"Імʼя профілю",remove_profile:"Видалити профіль %{name}",scale:"Масштаб площини",wireframe:"Каркасна сітка"},msg:{hint:"Якщо зберігати не як %{name}, ви також можете вибрати - видалити профіль %{name}",not_found:"Не знайдено існуючих сіток столу.",not_loaded:"Сітка не завантажена"},tooltip:{calibrate:"Почати нове калібрування, буде збережено як профіль 'default'",delete:"Видалити профіль",load:"Завантажити профіль",save:"Зберегти калібрований профіль в printer.cfg"}},chart:{label:{current:"Поточне значення",item:"Елемент",off:"Діаграма увімк.",on:"Діаграма вимк.",power:"Потужність",target:"Ціль",rate_of_change:"Зміни"},tooltip:{help:"Утримуйте Shift для збільшення.<br />Клікніть на елемент, щоб змінити його видимість на графіку.<br />Клікніть на потужність, щоб змінити видимість шкали на графіку."}},console:{label:{auto_scroll:"Автопрокрутка",flip_layout:"Перевернути відображення",hide_temp_waits:"Приховати тимчасові очікування"},placeholder:{command:"'tab' для автозаповнення, 'help' для списку команд 'стрілки↑ і ↓' історія команд",scroll:"Прокрути вниз"}},endpoint:{error:{cant_connect:"Щось пішло не так fluidd не може підключитися. Ви впевнені, що це правильний адрес?",cors_error:"Заблоковано політикою CORS",cors_note:'Це може означати, що ви повинні змінити вашу конфігурацію для moonraker. Будь-ласка перегляньте документацію налаштування декількох принтерів <a href="%{url}" target="_blank">тут</a>'},hint:{add_printer:"Наприклад, http://fluiddpi.local"},msg:{trouble:'Виникли проблеми? Перейдіть <a href="%{url}" target="_blank">сюди</a> для отримання додаткової інформації.'},tooltip:{endpoint_examples:"Введіть API URL. <br />Наприклад:<br /><blockquote>http://fluidd.local, http://192.168.1.150</blockquote>"}},endstop:{label:{open:"Немає контакту",triggered:"Є контакт"},msg:{subtitle:"Оновіть статус кінцевиків за допомого кнопки оновити"}},file_system:{filters:{label:{print_start_time:"Відфільтрувати надруковане",print_start_time_desc:"Відфільтрувати вже надруковані деталі.",hidden_files:"Відфільтрувати приховані файли",klipper_backup_files:"Відфільтрувати резервні копії klipperа"}},label:{dir_name:"Імʼя каталогу",disk_usage:"Використаний дисковий простір",diskinfo:"Інформація про диск",downloaded:"Завантажене",file_name:"Імʼя файлу",transfer_rate:"Швидкість передачі даних",uploaded:"Завантажено",view_section_documentation:"Перегляд '%{section}' документації"},msg:{confirm:"Ви впевнені? Це видалить всі файли і каталоги всередині.",not_found:"Файли не знайдені",processing:"Обробка"},overlay:{label:"<strong>Перетягніть</strong> файл сюди",drag_files_enqueue:"<strong>Перетягніть</strong> файли сюди, щоб поставити їх у чергу",drag_files_folders_upload:"<strong>Перетягніть</strong> файли та папки сюди, щоб завантажити",drag_files_folders:"<strong>Перетягніть</strong> файли та папки сюди"},title:{add_dir:"Додати каталог",add_file:"Додати файл",command_palette:"Команди",download_file:"Отримання файлу",rename_dir:"Перейменувати папку",rename_file:"Перейменувати файл",upload_file:"Завантаження файлу | Завантаження файлів"},tooltip:{low_on_space:"Мало місця на диску",root_disabled:"Root недоступний. Перевірте файли логів."},url:{klipper_config:"https://www.klipper3d.org/Config_Reference.html#%{hash}",moonraker_config:"https://moonraker.readthedocs.io/en/latest/configuration/#%{hash}",moonraker_telegram_bot_config:"https://github.com/nlef/moonraker-telegram-bot/wiki/Sample-config#%{hash}"}},gcode:{btn:{load_current_file:"Завантажити поточний файл"},label:{current_layer_height:"Поточна висота шару",exclude_object:"Виключити обʼєкт",follow_progress:"Слідкувати за прогресом",layer:"Шар",layers:"Шари",parsed:"Проаналізовано",show_current_layer:"Показувати поточний шар",show_extrusions:"Показувати екструзію",show_moves:"Показувати переміщення",show_next_layer:"Показувати наступний шар",show_parts:"Показувати частини",show_previous_layer:"Показувати попередній шар",show_retractions:"Показувати відкат",parsing_file:"Аналіз файла"},msg:{confirm:'Розмір файлу "%{filename}" є %{size}, це може бути ресурсоємним процесом для вашої системи. Ви впевнені?'}},general:{btn:{abort:"Відмінити",accept:"Примінити",add:"Додати",add_dir:"Додати каталог",add_file:"Додати файл",add_printer:"Додати принтер",add_to_queue:"Додати до черги",adjust_layout:"Налаштувати макет панелі приладів",adjusted:"Налаштовано",all:"Всі",auth_unsure:"Не знаєте, чому ви це бачите?",calibrate:"Калібрування",cancel:"Відмінити",clear_profile:"Очистити профіль",close:"Закрити",config_reference:"Приклади конфігурацій",create_zip_archive:"Створити ZIP архів",delete:"Видалити",download:"Завантажити",edit:"Редагувати",exit_layout:"Вийти з режиму редагування макету",extrude:"Вичавити",filter:"Фільтр",forgot_password:"Забули ваш пароль?",heaters_off:"Нагрівачі ВИМК.",job_queue:"Черга завдань",load_all:"Завантажити все",login:"Вхід",logout:"Вийти",more_information:"Більше інформації",pause:"Пауза",preheat:"Переднагрів",presets:"Шаблон",preview_gcode:"Переглянути GCode",print:"Надрукувати",quad_gantry_level:"QGL",reboot:"Перезавантаження",recover:"Відновити",refresh:"Обновити",reload:"Перезавантажити",remove:"Видалити",remove_all:"Видалити все",rename:"Перейменувати",reprint:"Друкувати ще раз",reset_file:"Скинути файл",reset_layout:"Скинути макет панелі приладів",reset_default_layout:"Скинути макет інтерфейсу",restart_firmware:"Перезавантажити прошивку",restart_service:"Перезавантажити %{service}",restart_service_klipper:"Перезавантажити Klipper",restart_service_moonraker:"Перезавантажити Moonraker",resume:"Продовжити",retract:"Відкат",return_dashboard:"Повернутися до дашборду",save:"Зберегти",save_as:"Зберегти як",save_restart:"Зберегти і перезавантажити",save_config_and_restart:"Зберегти налаштування і перезавантажити",send:"Відправити",set_color:"Встановити колір",set_default_layout:"Встановити відображення за замовчуванням",shutdown:"Вимкнути",snooze:"Відкласти",socket_reconnect:"Повторне підключення",socket_refresh:"Примусово оновити",upload:"Завантажити",upload_files:"Завантажити файли",upload_folder:"Завантажити папку",upload_print:"Завантажити і друкувати",view:"Вигляд",reset_stats:"Скинути статистику"},error:{app_setup_link:'Вимоги для встановлення Fluidd можна переглянути <a target="_blank" href="%{url}">тут.</a>',app_warnings_found:"Знайдено попередження у %{appName}.",components_config:'Конфігурація для плагінів Moonraker можна переглянути <a target="_blank" href="%{url}">тут.</a>',failed_components:"Moonraker не зміг запустити деякі плагіни. Будь-ласка перевірте логи, оновіть конфігурацію і перезавантажте moonraker."},label:{accel_to_decel:"Прискорення і сповільнення",acceleration:"Прискорення",accepted_screws:"Прийняті гвинти",actual_time:"Фактичний час",add_camera:"Додати камеру",add_filter:"Додати фільтр",add_preset:"Додати шаблон",add_user:"Додати користувача",api_key:"Ключ API",api_url:"API URL",auth_source:"Джерело аутентифікації",category:"Категорія",change_password:"Змінити пароль",clear_all:"Очистити все",color:"Колір",confirm:"Підтвердити",current_password:"Поточний пароль",current_user:"Поточний користувач",default:"За замовчуванням",disabled_while_printing:"Вимкнено під час друку",edit_camera:"Редагувати камеру",edit_filter:"Редагувати фільтр",edit_preset:"Редагувати шаблон",edit_user:"Редагувати користувача",extrude_length:"Довжина екструзії",extrude_speed:"Швидкість екструзії",filament:"Філамент",file:"Файл",finish_time:"Кінець",flow:"Потік",free:"вільно",heaters_busy:"Принтер на даний момент зайнятий. Вимкнення нагрівачів може призвести до збою друку.",high:"Вище",host:"Хост",layer:"Шар",layout:"Макет панелі приладів",ldap:"LDAP",longest_job:"Найдовший друк",low:"Нижче",manage_accounts:"Управління акаунтами",user_managed_source:"Користувач аутентифікується за допомогою %{source}",m117:"M117",moonraker:"Moonraker",name:"Імʼя",new_password:"Новий пароль",no_notifications:"Немає сповіщень",on:"Увімкнути",off:"Вимкнути",numeric_prefix_sort:"Сортувати по числовим префіксам",password:"Пароль",partial_of_total:"%{partial} з %{total}",power:"Живлення",pressure_advance:"Pressure Advance",printers:"Принтери",progress:"Прогрес",requested_speed:"Запит швидкості",retract_length:"Довжина відкату",retract_speed:"Швидкість відкату",save_as:"Зберегти як",screw_index:"Гвинт",screw_name:"Назва гвинту",screw_number:"Гвинт %{index}",services:"Сервіси",slicer:"Слайсер",smooth_time:"Час згладжування",speed:"Швидкість",sqv:"Швидкість проходження кута",stepper_enabled:"Кроковий мотор увімкнено",synced_extruder:"Синхронізований екструдер",thumbnail_size:"Розмір мініатюр",total:"Всього",total_filament:"Всього використано філаменту",total_filament_avg:"Середнє на друк",total_jobs:"Всього завдань друку",total_print_time:"Загальний час друку",total_print_time_avg:"Середній час друку",total_time:"Загальний час",total_time_avg:"Середній час",turn_device_on:"Увімкнути %{device}",turn_device_off:"Вимкнути %{device}",uncategorized:"Без категорії",unretract_extra_length:"Додаткова довжина екструзії",unretract_speed:"Швидкість втягування",upload_and_print:"Завантажити та надрукувати",used:"використано",username:"Імʼя користувача",variance:"Розбіжність",velocity:"Швидкість",version_sort:"Сортувати за версією",visible:"Видимий",z_offset:"Зміщення осі Z",unsaved_changes:"Незбережені зміни",alias:"Псевдонім",apply_z_offset:"Застосувати та зберегти зміщення осі Z",edit_category:"Редагувати категорію",add_category:"Додати категорію",file_time:"Час файлу"},msg:{password_changed:"Пароль змінено",wrong_password:"У-упс, щось пішло не так. Чи правильний ваш пароль?",bed_screws_adjust:"Натисніть <b>Налаштовано</b> якщо необхідне значне регулювання поточного гвинта; інакше натисніть <b>Примінити</b>, щоб продовжити.",welcome_back:"З поверненням.<br>Увійдіть нижче, щоб залишатися на зв’язку зі своїм принтером.",offline_ready:"Fluidd тепер готовий до роботи в автономному режимі.",needs_refresh:"Доступний новий вміст, будь ласка, натисніть кнопку <b>Перезавантажити</b>, щоб оновити."},simple_form:{error:{arrayofnums:"Тільки цифри",credentials:"Недійсні облікові дані",exists:"Вже існує",invalid_number:"Недійсний номер",invalid_url:"Недійсна URL-адреса",invalid_expression:"Недійсний вираз",max:"Max %{max}",min:"Min %{min}",min_or_0:"Min %{min} або 0",password_username:"Імʼя користувача не збігається з паролем",required:"Вимагається",invalid_aspect:"Недійсне співвідношення сторін"},msg:{confirm:"Ви впевнені?",confirm_exclude_object:"Ви впевнені, що хочете виключити цей об’єкт із друку?",confirm_forcemove_toggle:"Ви впевнені? Це може нашкодити принтеру.",confirm_reboot_host:"Ви впевнені? Це перезавантажить вашу хост-систему.",confirm_shutdown_host:"Ви впевнені? Це вимкне вашу хост-систему.",confirm_service_start:"Ви впевнені, що хочете запустити службу %{name}?",confirm_service_restart:"Ви впевнені, що бажаєте перезапустити службу %{name}?",confirm_service_stop:"Ви впевнені, що хочете зупинити службу %{name}?",confirm_power_device_toggle:"Ви впевнені? Це перемкне живлення цього пристрою.",unsaved_changes:"У вас є незбережені зміни. Ви впевнені, що бажаєте закрити цей файл?",apply_z_offset_endstop:"Кінцевик Z-зсуву буде розраховано та оновлено на основі поточного зміщення по осі Z.",apply_z_offset_probe:"Probe/Bltouch Z-зсуву буде розраховано та оновлено на основі поточного зміщення по осі Z",no_file_preview:"%{name} зараз неможливо переглянути."}},table:{header:{actions:"Дії",chamber_temp:"Температура камери",end_time:"Завершено",estimated_time:"Очікуваний час",filament:"Філамент",filament_name:"Назва філаменту",filament_type:"Тип філаменту",filament_used:"Використано філаменту",filament_weight_total:"Вага філаменту",first_layer_bed_temp:"Температура столу на першому шарі",first_layer_extr_temp:"Температура сопла на першому шарі",first_layer_height:"Висота першого шару",height:"Висота",last_printed:"Востаннє надруковано",layer_height:"Висота шару",modified:"Модифіковано",name:"Імʼя",nozzle_diameter:"Діаметр сопла",print_duration:"Тривалість друку",time_added:"Час додавання",time_in_queue:"Час у черзі",size:"Розмір",slicer:"Слайсер",slicer_version:"Версія слайсеру",start_time:"Час початку",status:"Статус",total_duration:"Загальна тривалість"}},title:{add_chart:"Додати діаграму",add_printer:"Додати принтер",bedmesh:"Сітка столу",bedmesh_controls:"Керування сіткою столу",camera:"Камера | Камери",config_files:"Файли конфігурації",configure:"Система",console:"Консоль",diagnostics:"Діагностика",edit_chart:"Редагувати діаграму",endstops:"Кінцевики",fans_outputs:"Вентилятори і Виходи",gcode_preview:"Перегляд GCode",history:"Історія завдань",home:"Панель керування",jobs:"Завдання",job_queue:"Черга завдань",limits:"Ліміти принтера",macros:"Макроси",metrics_explorer:"Провідник показників",not_found:"404 Не знайдено",other_files:"Інші файли",pending_configuration_changes:"Очікуються зміни конфігурації",retract:"Відкат через прошивку",runout_sensors:"Давач закінчення пластику",settings:"Налаштування",stats:"Статистика принтеру",system:"Система",system_overview:"Інформація про систему",temperature:"Температури",timelapse:"Прискорений запис",tool:"Інструмент",tune:"Тонке налаштування"},tooltip:{browse_metrics:"Доступні показники",estop:"Аварійна зупинка",managed_by_moonraker:"Managed by your moonraker configuration",notifications:"Сповіщення",reload_klipper:"Перезавантажує налаштування klipper",reload_restart_klipper:"Перезавантажує налаштування klipper і перезавантажує MCU",restart_klipper:"Перезавантажує сервіс klipper",run_collector:"Запустити колектор"}},history:{msg:{confirm:"Ви впевнені? Це очистить всю історію та статистику принтера.",confirm_stats:"Ви впевнені? Це очистить всю статистику.",confirm_jobs:"Ви впевнені? Це очистить усі виконані завдання."}},job_queue:{msg:{confirm:"Ви впевнені? Це очистить всю чергу принтера.",confirm_jobs:"Ви впевнені? Це очистить усі завдання.",confirm_stats:"Ви впевнені? Це очистить усі статистичні дані."}},printer:{state:{busy:"Зайняти",cancelled:"Скасовано",complete:"Готово",idle:"Чекає завдання",loading:"Завантаження",paused:"Пауза",printing:"Йде друк",ready:"Готовий",standby:"Режим очікування"}},setting:{btn:{add_camera:"Додати камеру",add_category:"Додати категорію",add_filter:"Додати фільтр",add_metric:"Додати показники",add_thermal_preset:"Додати шаблон",add_user:"Додати користувача",reset:"Скинути",select_theme:"Вибрати тему"},camera_type_options:{mjpegadaptive:"MJPEG Адаптивний",mjpegstream:"Потік MJPEG",hlsstream:"Потік HLS",video:"IP Камера",iframe:"Сторінка HTTP"},camera_rotate_options:{90:"90°",180:"180°",270:"270°",none:"–"},label:{all_off:"Вимкнути все",all_on:"Увімкнути все",aspect_ratio:"Співвідношення сторін",aspect_ratio_format:"[width : height]",auto_edit_extensions:"Розширення файлів, які автоматично відкриваються в режимі редагування",auto_follow_on_file_load:"Автоматично стежити за прогресом завантаження файлу",auto_load_on_print_start:"Автоматично завантажувати файл коли починається друк",auto_load_mobile_on_print_start:"Автоматично завантажувати файл на мобільні пристрої",axes:"Осі",camera_flip_x:"Перевернути горизонтально",camera_flip_y:"Перевернути вертикально",camera_fullscreen_action:{title:"Повноекранна дія",embed:"Embed",rawstream:"Потік Raw"},camera_rotate_by:"Обертати на",camera_stream_type:"Тип потоку",camera_url:"Url камери",card:"Картка",collector:"Збирач",confirm_on_estop:"Потрібно підтвердження Аварійної зупинки",confirm_on_power_device_change:"Вимагати підтвердження змін живлення пристрою",confirm_on_save_config_and_restart:"Переглядати зміни конфігурації, які очікують, перш ніж зберегти та перезапустити",confirm_dirty_editor_close:"Вимагати підтвердження під час закриття редактора з незбереженими змінами",contains:"Містить",dark_mode:"Темна тема",dashed:"Штриховий",default_extrude_length:"Довжина екструзії за замовчуванням",default_extrude_speed:"Швидкість екструзії за замовчуванням",default_min_layer_height:"Мінімальна висота шару за замовчуванням",default_toolhead_move_length:"Довжина переміщень головки за замовчуванням",default_toolhead_xy_speed:"Швидкість головки по осях XY за замовчуванням",default_toolhead_z_speed:"Швидкість головки по осі Z за замовчуванням",dotted:"Пунктирний",draw_background:"Задній фон",enable:"Увімкнути",enable_diagnostics:"Увімкнути діагностику",enable_notifications:"Увімкнути сповіщення",expression:"Вираз",extrusion_line_width:"Ширина лінії екструзії",flip_horizontal:"Горизонтально відобразити",flip_vertical:"Вертикально відобразити",fill_color:"Колір заливки",fill_opacity:"Непрозорість заливки",filter:"Фільтр | Фільтри",fps_target:"Ціль FPS",fps_idle_target:"Ціль FPS, коли не у фокусі",height:"Висота",gcode_coords:"Використовувати координати з GCode",icon:"Значок",invert_x_control:"Інвертувати керування по осі X",invert_y_control:"Інвертувати керування по осі Y",invert_z_control:"Інвертувати керування по осі Z",language:"Мова інтерфейсу",last_result:"Останній результат",left_y:"Ліва вісь Y",line_color:"Колір лінії",line_style:"Стиль лінії",min:"Мінімум",max:"Максимум",metrics:"Показники",move_line_width:"Ширина лінії переміщення",name:"Імʼя",none:"Жодного",optional:"Додатково",power_toggle_in_top_nav:"Перемикач живлення у верхній панелі навігації",primary_color:"Основний колір",printer_name:"Імʼя принтера",reset:"Скинути налаштування",retraction_icon_size:"Розмір іконки відкату",right_y:"Права вісь Y",show_animations:"Показувати анімації",show_barometric_pressure:"Показати барометричний тиск",show_code_lens:"Показати CodeLens",show_legend:"Показати легенду",show_rate_of_change:"Показати швидкість зміни температури",show_relative_humidity:"Показати відносну вологість",show_save_config_and_restart:"Кнопка «Зберегти налаштування і перезавантажити» у верхній навігаційній панелі",show_upload_and_print:"Показати кнопку «Завантажити та надрукувати» на верхній панелі навігації",solid:"Суцільний",starts_with:"Почати з",theme_preset:"Шаблони спільноти",thermal_preset_gcode:"GCode",thermal_preset_name:"Імʼя шаблону",title:"Заголовок",toolhead_move_distances:"Значення відстані до каретки",type:"Тип",unit:"Одиниця",z_adjust_values:"Значення підстроювання осі Z",date_format:"Формат дати",time_format:"Формат часу",text_sort_order:"Порядок сортування тексту",force_move_toggle_warning:"Вимагати підтвердження під час активації FORCE_MOVE",show_manual_probe_dialog_automatically:'Показувати діалогове вікно "Manual Probe" автоматично',show_bed_screws_adjust_dialog_automatically:'Автоматично відображати діалогове вікно "Налаштування гвинтів".',date_time_format:"Формат дати й часу",group_lower_layers:"Групування нижніх шарів"},timer_options:{duration:"Тільки тривалість",filament:"Оцінка використання філаменту",file:"Оцінка часу на основі файлу",slicer:"Слайсер"},title:{authentication:"Аутентифікація",console:"Консоль",camera:"Камера | Камери",file_editor:"Редактор файлів",gcode_preview:"Попередній перегляд GCode",general:"Загальне",macros:"Макроси",theme:"Тема",thermal_presets:"Шаблони температури",tool:"Інструмент"},tooltip:{diagnostics_performance:"[BETA] Реєстрація діагностичної інформації може вплинути на швидкодію",gcode_coords:"Використовувати позиції з GCode замість позиції головки на панелі керування",show_manual_probe_dialog_automatically:'Автоматично показує допоміжне діалогове вікно, якщо запущено інструмент "Manual Probe"',show_bed_screws_adjust_dialog_automatically:'Автоматично показує допоміжне діалогове вікно, якщо запущено інструмент "Регулювання гвинтів столу"'}},socket:{msg:{connecting:"Підключення до moonraker...",no_connection:"Немає підключення до moonraker. Будь-ласка перевірте статус роботи moonraker і / або перезапустіть сторінку."}},system_info:{label:{capacity:"Ємність",cpu_desc:"Опис ЦП",distribution_codename:"Кодова назва",distribution_like:"Розповсюджується як",distribution_name:"Дистрибутив",frequency:"Частота",hardware_desc:"Опис обладнання",hostname:"Імʼя хоста",klipper_load:"Навантаження на Klipper",manufactured:"Виготовлено",manufacturer:"Виробник",mcu_awake:"{mcu} Час неспання",mcu_bandwidth:"{mcu} Пропускна здатність",mcu_information:"{mcu} Інформація",mcu_load:"{mcu} Навантаження",micro_controller:"Мікроконтролер",model:"Модель",moonraker_load:"Навантаження на Moonraker",network:"Мережа",processor_desc:"Процесор",product_name:"Назва продукту",serial_number:"Серійний номер",system_load:"Завантаження системи",system_memory:"Системна памʼять",system_utilization:"Використання системи",total_memory:"Загальна памʼять",operating_system:"Операційна система",version:"Версія",virtualization:"Віртуалізація"}},tool:{btn:{home_x:"X",home_y:"Y",home_all:"Всі"},title:{bed_screws_adjust:"Регулювання гвинтів столу",manual_probe:"Ручне налаштування зонду (Probe)"},tooltip:{absolute_positioning:"Абсолютне позиціонування",extruder_disabled:"екструдер вимкнений, температрура нижче min_extrude_temp (%{min}<small>°C</small>)",home_xy:"Додому XY",home_z:"Додому Z",manual_probe:"Manual Probe",motors_off:"Вимкнути мотори",relative_positioning:"Відносне позиціонування"},label:{stats_active_extruder:'<span class="secondary--text">Конфігурація активного екструдера встановлена для</span> %{filamentDiameter} мм діаметр філаменту <span class="secondary--text">і</span> %{nozzleDiameter} мм сопла',stats_volumetric_flow:'Екструдування зі швидкістю %{extrudeSpeed} мм/с<span class="secondary--text">, екструдер повинен забезпечити</span> розрахунковий об’ємний потік %{estimatedVolumetricFlow} мм³/с',stats_extruded_length:'Екструдування %{extrudeLength} мм філаменту на %{extrudeFactor} % потоку<span class="secondary--text">, надасть</span> орієнтовну вихідну довжину в %{estimatedExtrudedLength} мм',stats_max_speed:'<span class="secondary--text">При висоті шару</span> %{layerHeight} мм <span class="secondary--text">, орієнтовна</span> максимальна швидкість друку становить %{estimatedMaxSpeed} мм/с'}},version:{btn:{check_for_updates:"Перевірити наявність оновлень",finish:"Завершити",update:"Оновити",update_all:"Оновити все",view_versions:"Переглянути версії"},label:{commit_history:"Історія комітів",commits_on:"Коміти на",committed:"Закомічено",dirty:"DIRTY",invalid:"INVALID",os_packages:"Застосунки OS",package_list:"Список пакетів",up_to_date:"Версія актуальна",updates_available:"Доступні оновлення"},status:{finished:"Оновлення завершено",updating:"Оновлення..."},title:"Оновлення ПЗ",tooltip:{commit_history:"Історія комітів",dirty:"вказує на відʼєднаний стан HEAD, не в master-гілці або недійсний оригінальний репозиторій",invalid:"вказує на локальні зміни в репозиторії",packages:"Пакети",release_notes:"Примітки до релізу"}},timelapse:{btn:{render:"Рендер",save_frames:"Збереження кадрів"},error:{newframe:"Помилка при створенні кадру"},label:{frames:"%{frames} кадр | %{frames} кадрів",length:"Розрахункова довжина: %{length}",frame:"Кадр | Кадри"},title:{timelapse_settings:"Налаштування таймлапсу",timelapse_status:"Статус таймлапсу",render_settings:"Налаштування рендеру"},setting:{enable:"Увімкнути",auto_render:"Автоматичний рендер",crf:"Constant Rate Factor",duplicatelastframe:"Дублювання останніх кадрів",fw_retract:"Використовувати ретракт з прошивки",gcode_verbose:"Детальний GCode",mode:"Режим",mode_layermacro:"Макрос шару",mode_hyperlapse:"Рухома покадрова зйомка",hyperlapse_cycle:"Цикл рухомої покадрової зйомки",output_framerate:"Вихідна частота кадрів",park_retract_distance:"Дистанція втягування при паркуванні",park_retract_speed:"Швидкість втягування при паркуванні",park_extrude_distance:"Дистанція екструзії при паркуванні",park_extrude_speed:"Швидкість екструзії при паркуванні",parkhead:"Паркування голови",park_time:"Час паркування",park_travel_speed:"Швидкість переміщення при паркуванні",park_custom_pos_x:"Позиція парковки X",park_custom_pos_y:"Позиція парковки Y",park_custom_pos_dz:"Позиція парковки Z-Hop",parkpos:{label:"Позиція паркування",custom:"Індивідуальний",front_left:"Передній лівий",front_right:"Передній правий",center:"Center",back_left:"Задній лівий",back_right:"Задній правий",x_only:"Перемістити лише X",y_only:"Перемістити лише Y"},previewimage:"Створити зображення попереднього перегляду",saveframes:"Зберегти кадри",stream_delay_compensation:"Компенсація затримки",targetlength:"Цільова довжина",variable_fps:"Змінний FPS",variable_fps_min:"Мінімальна частота кадрів",variable_fps_max:"Максимальна частота кадрів"}}}};export{e as default};
