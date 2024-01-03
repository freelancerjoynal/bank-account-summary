<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Admin-Login</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw=="crossorigin="anonymous" referrerpolicy="no-referrer"/>
    <link rel="stylesheet" href="{{asset('front_end/styles/fontawesome.css')}}">
    <link rel="stylesheet" href="{{asset('front_end/styles/bootstrap.min.css')}}">
    <link rel="stylesheet" href="{{asset('front_end/styles/login.css')}}">
</head>
<body class="bg-light">
    <div class="container">
        <div class="row mt-5">
            <div class="col-lg-6 bg-white m-auto reg_sec">
                {{-- <div class="social_links mt-5 mb-5">
                    <a class="google" href="#"><i class="fab fa-google"></i></a>
                    <a class="facebook" href="#"><i class="fab fa-facebook-f"></i></a>
                    <a class="twitter" href="#"><i class="fab fa-twitter"></i></a>
                    <a class="linkedin" href="#"><i class="fab fa-linkedin-in"></i></a>
                </div> --}}

                <h4 class="text-center pt-5 mb-3 font-bold">{{ __('Login System') }}</h4>
                <form method="POST" action="{{ route('login') }}">
                    @csrf

                    <div class="input-group mb-3">
                        <span class="input-group-text required"><i class="fa fa-user"></i></span>
                        <input id="email" type="email" class="form-control @error('email') is-invalid @enderror" name="email" value="{{ old('email') }}" required autocomplete="email" autofocus placeholder="email">
                        @error('email')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                        @enderror

                    </div>
                    <div class="input-group mb-3">
                        <span class="input-group-text required"><i class="fa-solid fa-lock"></i></span>
                        <input id="password" type="password" class="form-control @error('password') is-invalid @enderror" name="password" required autocomplete="current-password" placeholder="password"/>
                        @error('password')
                            <span class="invalid-feedback" role="alert">
                                <strong>{{ $message }}</strong>
                            </span>
                         @enderror

                    </div>
                        @if (Route::has('password.request'))
                        <a class="btn btn-link reg_pas" href="{{ route('password.request') }}"><p class="text-end">
                        {{ __('Forget Password?') }} </p>
                        </a>
                        @endif
                        <a href="#"><button type="submit" class="mt-3 btn btn-block button_reg">Login</button></a>
                    </form>
                    


                </div>
            </div>
        </div>
    </div>
</div>

    <script src="{{asset('front_end/js//custom.js')}}"></script>
</body>
</html>
