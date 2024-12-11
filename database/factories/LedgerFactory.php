<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Ledger>
 */
class LedgerFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'title' => fake()->randomElement(['นาย','นาง','นางสาว']),
            'firstname' => fake()->firstName(),
            'lastname' => fake()->lastName(),
            'birthdate' => fake()->dateTime()->format('Y-m-d'),
        ];
    }
}
