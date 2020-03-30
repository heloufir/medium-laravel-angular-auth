<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $user = new \App\User();
        $user->name = 'John DOE';
        $user->email = 'john.doe@email.com';
        $user->password = bcrypt('secret');
        $user->save();
    }
}
