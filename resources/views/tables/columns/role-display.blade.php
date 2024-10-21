@php
    $roles = $getState() ?: [];
@endphp

<div class="flex flex-wrap gap-2">
    @foreach ($roles as $role)
        <div class="px-2 py-1 rounded-md bg-gray-100 dark:bg-gray-800">
            {{ $role->name }}
        </div>
    @endforeach
</div>
