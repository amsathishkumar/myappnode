VIEWDIR="$PWD"
PROJECT=sat
SUMMARY="sat data model manager"
PRODUCT_NAME="sat"
PREFIX="/opt/sat/$PROJECT"
DESCRIPTION="$SUMMARY"
APPUSER="sat"
APPGROUP="sat"
LOG_DIR="/var/log/sat/$PROJECT/log"

export GITDIR=$VIEWDIR/.git
TAG=$(git --git-dir=$GITDIR describe --abbrev=0 --tags )
VER=$(echo $TAG.$(git --git-dir=$GITDIR log $TAG.. --oneline | wc -l ) | sed 's/[^0-9.]//g')
REL=$(git --git-dir=$GITDIR rev-parse --short HEAD)
topdir=$PWD

mkdir -p $topdir/rpmbuild/{BUILD,BUILDROOT,RPMS,SOURCES,SPECS,SRPMS}