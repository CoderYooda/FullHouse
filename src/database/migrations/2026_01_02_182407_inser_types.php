<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        \App\Models\TournamentType::create([
            'title' => 'High Roller',
            'description' => 'Турнир повышенного уровня, в котором игрок не имеет права на ошибку. При поражении участник не может вернуться в игру и покидает турнир окончательно. Этот формат подчеркивает высокий уровень ответственности и требует максимальной концентрации от каждого игрока.',
            'tournament_title' => 'High Roller',
            'calculation_scheme' => '{}',
            ]);

        \App\Models\TournamentType::create([
            'title' => 'Small Stack',
            'description' => 'Динамичный турнир с уменьшенным стартовым стеком, который делает игру более быстрой, азартной и наполняет каждый уровень максимальным напряжением. С самого начала игроки оказываются в условиях, где каждая фишка имеет значение, а решения требуют точности и своевременности.',
            'tournament_title' => 'Small Stack',
            'calculation_scheme' => '{}',
            ]);

        \App\Models\TournamentType::create([
            'title' => 'Pot Limit',
            'description' => 'Турнир, в котором каждая ставка ограничена размером текущего банка. Такой формат создаёт уникальный баланс между свободой действий и стратегической дисциплиной. Игроки могут разгонять банк, но только в рамках того, что уже находится на столе — а значит, каждая ставка становится более осмысленной и продуманной.',
            'tournament_title' => 'Pot Limit',
            'calculation_scheme' => '{}',
            ]);

        \App\Models\TournamentType::create([
            'title' => 'Ultra Deep Stack',
            'description' => 'Вершина стратегического покера. Игроки начинают с максимально увеличенными стартовыми стеками, что создаёт невероятно глубокие и насыщенные игровые ситуации с первых же раздач.',
            'tournament_title' => 'Ultra Deep Stack',
            'calculation_scheme' => '{}',
            ]);

        \App\Models\TournamentType::create([
            'title' => 'Bounty Tournament',
            'description' => 'Турнир, на котором каждому игроку выпадает возможность заработать 35 очков к рейтингу за выбитого участника. Чем больше игроков ты выбьешь, тем больше очков получишь.',
            'tournament_title' => 'Bounty Tournament',
            'calculation_scheme' => '{}',
            ]);

        \App\Models\TournamentType::create([
            'title' => 'Progressive Knockout',
            'description' => 'Стартовая цена головы игрока 50 очков, при выбивании игрока очки выбывшего игрока делятся пополам и отдаются игроку, который выбил (50% в стоимость его головы, 50% в очки рейтинга) . Таким образом стоимость головы выбившего игрока становится 75 очков и 25 очков игрок забирает себе. Система работает на протяжении всего турнира, пока не будет выявлен победитель!',
            'tournament_title' => 'Progressive Knockout',
            'calculation_scheme' => '{}',
            ]);

        \App\Models\TournamentType::create([
            'title' => 'Phoenix Tournament',
            'description' => 'Стартуют все с фиксированного стека. Re-entry возвращает тебя в игру со средним стеком на игрока. В период поздней регистрации выдаётся Add-on равный 2-ум средним стекам. Сжигание стека в игре не допускается.',
            'tournament_title' => 'Phoenix Tournament',
            'calculation_scheme' => '{}',
            ]);

        \App\Models\TournamentType::create([
            'title' => 'Пьяный Покер',
            'description' => 'Турнир при котором каждому участнику выдается приветственный напиток из бара',
            'tournament_title' => 'Пьяный Покер',
            'calculation_scheme' => '{}',
            ]);

        \App\Models\TournamentType::create([
            'title' => 'Вечерний Покер',
            'description' => 'Зелёная фишка (1 шт.) — двойная прокрутка стола (run it twice). Условия:— использовать можно только один на один при полном столе; По 1 фишки каждого вида на игрока; Не действует в heads-up;',
            'tournament_title' => 'Вечерний Покер',
            'calculation_scheme' => '{}',
            ]);
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        //
    }
};
