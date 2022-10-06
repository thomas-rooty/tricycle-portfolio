# Get all branches from a GitHub repo
# and rebase them on top of master

import subprocess


def get_branches():
    branches = []
    p = subprocess.Popen(['git', 'branch', '-r'], stdout=subprocess.PIPE)
    for line in p.stdout:
        line = line.decode('utf-8')
        if 'origin/main' in line:
            continue
        # Remove the 'origin/' part
        branch = line[9:].strip()
        branches.append(branch)
    return branches


def rebase(branch):
    print(branch)
    subprocess.call(['git', 'checkout', branch])
    print('')
    subprocess.call(['git', 'rebase', 'main'])
    print('---------------')


def main():
    branches = get_branches()
    for branch in branches:
        rebase(branch)


if __name__ == '__main__':
    main()
