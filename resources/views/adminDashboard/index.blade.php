@extends('layouts.admin_app')

@section('content')
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>
<!-- Begin Page Content -->
<div class="dashboard-content px-3 pt-4">
    <div class="card-header d-flex justify-content-between mt-4">
        <h6 class="m-0 font-weight-bold text-primary">{{ __('Account Holder Information') }}</h6>
        <div class="small text-white">
            <button type="button" class="btn btn-info btn-lg" data-bs-toggle="modal" data-bs-target="#userModal">
                Create New Account
            </button>
        </div>
    </div>
    <div class="table-responsive bg-white">
        <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
            <thead>
                <tr>
                    <th>Sl</th>
                    <!-- <th>User ID</th> -->
                    <th>Name</th>
                    <th>Email</th>
                    <th>Account No.</th>
                    <th>Balance</th>
                    <th>Action</th>
                    <!-- Add more columns as needed -->
                </tr>
            </thead>
            <tbody>
                @forelse ($userBalances as $i => $user)
                <tr>
                    <td>{{ $i + 1 }}</td>
                    <!-- <td>{{ $user->id }}</td> -->
                    <td>{{ $user->name }}</td>
                    <td>{{ $user->email }}</td>
                    <td>{{ $user->ac_no }}</td>
                    <td>{{ $user->balance }}</td>
                    <!-- <td>{{ $user->total_credits }}</td> -->
                    <td class="d-flex gap-2">
                        
                        <button type="button" value="{{ $user->id }}"
                            class="CreditsBtn btn btn-success btn-sm text-white" data-bs-toggle="modal"
                            data-bs-target="#creditsModal">
                            <!-- <i class="fas fa-eye">Credits</i> -->
                            Credits
                        </button>
                        <button type="button" value="{{ $user->id }}"
                            class="DebitsBtn btn btn-primary btn-sm text-white" data-bs-toggle="modal"
                            data-bs-target="#debitsModal">
                            Debits
                        </button>
                        <form action="{{ route('account_details') }}" method="post">
                            @csrf
                            <input name="id" value="{{ $user->id }}" hidden>
                            <input name="name" value="{{ $user->name }}" hidden>
                            <input name="email" value="{{ $user->email }}" hidden>
                            <input name="ac_no" value="{{ $user->ac_no }}" hidden>
                            <input name="total_credits" type="number" value="{{ $user->total_credits }}" hidden>
                            <input name="total_debits" type="number" value="{{ $user->total_debits}}" hidden>

                            <button type="submit"
                                class="detailsBtn btn btn-secondary btn-sm text-white m-2">Details</button>
                        </form>
                        
                        <a href="{{ route('account.delete', ['id' => $user->id]) }}" class="btn btn-sm btn-danger"onclick="return confirm('Are you sure to delte?')" >Delete</a>
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

<!-- Create New User -->
<div class="modal fade" id="userModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Create New User</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <form action="{{ route('createUser') }}" method="post">
                @csrf
                <div class="modal-body">
                    <!-- Display the value in an input field dynamically using JavaScript -->
                    <div class="form-group">
                        <label for="modalCreditsInput">Name:</label>
                        <input type="text" id="modalCreditsInput" class="form-control" name="name"
                            placeholder="Enter Name" required>
                    </div>
                    <div class="form-group">
                        <label for="modalCreditsInput">Email:</label>
                        <input type="email" id="modalCreditsInput" class="form-control" name="email"
                            placeholder="Enter Email" required>
                    </div>
                    <div class="form-group">
                        <label for="modalCreditsInput">Account Number:</label>
                        <input type="text" id="modalCreditsInput" class="form-control" name="ac_no"
                            placeholder="Enter Account Number" required>
                    </div>
                </div>
                <!-- Modal footer -->
                <div class="modal-footer">
                    <button type="submit" class="btn btn-success">Submit</button>
                    <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>
                </div>
            </form>
        </div>
    </div>
</div>
<!-- Modal -->
<div class="modal fade" id="creditsModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Credits</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <form action="{{ route('credit_save') }}" method="post">
                @csrf
                <div class="modal-body">
                    <!-- Display the value in an input field dynamically using JavaScript -->
                    <input type="text" id="modalCreditsInput1" class="form-control" name="account_holder_id" readonly>
                    <div class="form-group">
                        <label for="modalCreditsInput">Credit Date:</label>
                        <input type="date" id="modalCreditsInput" class="form-control" name="txn_date"
                            placeholder="txn_date">
                    </div>
                    <div class="form-group">
                        <label for="modalCreditsInput">Credit Amount:</label>
                        <input type="number" id="modalCreditsInput" class="form-control" name="credits"
                            placeholder="Input Amount">
                    </div>
                    <div class="form-group">
                        <label for="modalCreditsInput">Category:</label>
                        <input type="text" id="modalCreditsInput" class="form-control" name="category"
                            placeholder="General">
                    </div>
                    <div class="form-group">
                        <label for="modalCreditsInput">Description:</label>
                        <input type="text" id="modalCreditsInput" class="form-control" name="description"
                            placeholder="Description">
                    </div>
                </div>
                <!-- Modal footer -->
                <div class="modal-footer">
                    <button type="submit" class="btn btn-success">Submit</button>
                    <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>
                </div>
            </form>
        </div>
    </div>
</div>

<script src="https://code.jquery.com/jquery-3.6.4.min.js"></script>

<script>
    $(document).ready(function () {
        $('.CreditsBtn').on('click', function () {
            var creditsValue = $(this).val();

            // Set the value of the input field
            $('#modalCreditsInput1').val(creditsValue);
        });
    });
</script>
<!-- Modal -->
<!-- Modal -->
<div class="modal fade" id="debitsModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Debits</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <form action="{{ route('debit_save') }}" method="post">
                @csrf
                <div class="modal-body">
                    <!-- Display the value in an input field dynamically using JavaScript -->
                    <input type="text" id="modalDebitsInput2" class="form-control" name="account_holder_id" readonly>
                    <div class="form-group">
                        <label for="modalDebitsInput">Debit Amount:</label>
                        <input type="number" id="modalDebitsInput" class="form-control" name="debits"
                            placeholder="Input Amount">
                    </div>
                    <div class="form-group">
                        <label for="DebitsInput">Category:</label>
                        <input type="text" id="DebitsInput" class="form-control" name="category"
                            placeholder="Category">
                    </div>
                    <div class="form-group">
                        <label for="DebitsInput">Description:</label>
                        <input type="text" id="DebitsInput" class="form-control" name="description"
                            placeholder="Description">
                    </div>
                </div>
                <!-- Modal footer -->
                <div class="modal-footer">
                    <button type="submit" class="btn btn-success">Submit</button>
                    <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>
                </div>
            </form>
        </div>
    </div>
</div>

<script>
    $(document).ready(function () {
        $('.DebitsBtn').on('click', function () {
            var debitsValue = $(this).val();

            // Set the value of the input field
            $('#modalDebitsInput2').val(debitsValue);
        });
    });
</script>
@endsection