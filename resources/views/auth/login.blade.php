@extends('layouts.app')

@section('content')
<div class="bg-white shadow rounded overflow-hidden">

    <form method="POST" action="{{ route('login') }}">

        <header class="px-6 py-6">
            <h2 class="border-b pb-4 text-xs uppercase tracking-wider">{{ __('Login') }}</h2>
        </header>

        @csrf
        {{-- Email Address --}}
        <div class="px-6">
            <div class="mb-6">
                <label for="email" class="block mb-2">{{ __('Email Address') }}</label>
                <input id="email" type="email" class="form-input w-full @error('email') border-red-500 @enderror" name="email" value="{{ old('email') }}" required autocomplete="email" autofocus />
                @error('email')
                <span class="text-sm text-red-500 italic" role="alert">{{ $message }}</span>
                @enderror
            </div>
            {{-- Password --}}
            <div class="mb-6">
                <label for="password" class="block mb-2">{{ __('Password') }}</label>
                <input id="password" type="password" class="form-input w-full @error('password') border-red-500 @enderror" name="password" required autocomplete="current-password" />
                @error('password')
                <span class="text-sm text-red-500 italic" role="alert">{{ $message }}</span>
                @enderror
            </div>
            {{-- Remeber me --}}
            <div class="mb-6">
                <div class="flex justify-between">
                    <div class="flex items-center">
                        <input class="form-checkbox" type="checkbox" name="remember" id="remember" {{ old('remember') ? 'checked' : '' }} />
                        <label class="ml-2" for="remember">{{ __('Remember me') }}</label>
                    </div>
                    @if (Route::has('password.request'))
                        <a class="underline" href="{{ route('password.request') }}">
                            {{ __('Forgot Your Password?') }}
                        </a>
                    @endif
                </div>
            </div>
        </div>
        {{-- Footer --}}
        <footer class="bg-purple-100 py-4 px-6 flex justify-between items-center">
            <button type="submit" class="bg-purple-700 text-white text-xs uppercase font-bold tracking-wider px-6 py-3 rounded">
                {{ __('Login') }}
            </button>

            <a class="bg-purple-200 text-purple-700 text-xs uppercase font-bold tracking-wider px-6 py-3 rounded" href="/register">
                {{ __('Register') }}
            </a>
        </footer>
    </form>
</div>  
@endsection