@extends('layouts.admin_app')

@section('content') 
    <!-- Begin Page Content -->
    <div class="dashboard-content px-3 pt-4">
    <h3 class='text-center'>Account Holder Information</h3>
    
    <div class="row">
        <div class="col-md-6">
            <p>AC Number: {{ $ac_no }}</p>
            <p>Name: {{ $name }}</p>
            <p>Total Deposits/Credits:$ {{  $total_credits  }}</p>
            <p>Total Withdrawals/Debit:$ {{ $total_debits }}</p>
            <p>Available Balance:$ {{ $total_credits- $total_debits}}</p>
        </div>
        <div class="col-md-6">
            <h3>Account Update</h3>
            <br>
            <form action="{{route('profile.update')}}" method="POST">
                @csrf
                <input type="hidden" name="userid" value="{{$id}}">
                <div class="form-group">
                    <p>Account Name</p>
                    <input name="username" class="form-control" type="text" value="{{ $name }}">
                </div>
                <div class="form-group">
                    <p>Account Number</p>
                    <input name="useraccount" class="form-control" type="number" value="{{ $ac_no }}">
                </div>
                
                <div class="form-group">
                    <button class="btn btn-primary">Update Account information</button>
                </div>
            </form>
        </div>
    </div>
    <div class="table-responsive bg-white">
         <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                <thead>
                    <tr>
                        <th>Sl</th>
                        <!-- <th>User ID</th> -->
                        {{-- <th>Date</th> --}}
                        {{-- <th>Description</th>
                        <th>Deposits/Credits</th>
                        <th>Withdrawals/Debit</th>
                        <th>Update Information</th> --}}
                        <!-- Add more columns as needed -->
                    </tr>
                </thead>
                <tbody>
                    @forelse ($accountInformation as $i => $user)
                    
                        <tr>
                            <td>{{ $i + 1 }}</td>
                            <!-- <td>{{ $user->id }}</td> -->
                            {{-- <td>{{ $user->txn_date }}</td> --}}
                            {{-- <td>{{ $user->description }}</td> --}}

                            <td>
                                <form action="{{route('admin.transaction.update')}}" method="POST">
                                    <div class="form-group d-flex">
                                        @csrf
                                        <input name="trxid" class="form-control mx-2" type="hidden" value="{{  $user->id }}">

                                        <input name="txn_time" class="form-control mx-2" type="date" value="{{  $user->txn_date }}">

                                        <input name="description" class="form-control mx-2" type="text" value="{{$user->description}}">

                                        <input name="credit" class="form-control mx-2" type="number" step="0.01" name="credit" value="{{ $user->credits}}">
                                        
                                        <input name="debit" class="form-control mx-2" type="number" step="0.01" name="debit"  value="{{ $user->debits}}">
                                        <button class="btn" type="submit">Update</button>
                                        <a href="{{ route('admin.transaction.delete', ['id' => $user->id]) }}" class="btn btn-sm btn-danger">Delete</a>
                                    </div>
                                </form>
                            </td>
                            <!-- Add more columns as needed -->
                        </tr>
                
                @empty
                    <tr>
                        <td colspan="4">No users with role 1 found.</td>
                    </tr>
                @endforelse
                </tbody>
            </table>
            </div>
    </div>
@endsection
